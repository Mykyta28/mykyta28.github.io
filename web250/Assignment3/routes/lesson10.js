const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();
const { buildResponse } = require("../helpers/view");

// MongoDB connection URL and collection name
const url = "mongodb://localhost:27017/recordbox";
const collectionName = "records";

// Route to serve the HTML form
router.get("/", (req, res) => {
  res.send(buildResponse("./templates/lesson10/lesson10.html"));
});

// Route to create a collection
router.post("/create-collection", async (req, res) => {
  const { title } = req.body;
  try {
    await createCollection(title);
    res.send(`Collection "${title}" created successfully.`);
  } catch (err) {
    console.error("Error creating collection:", err);
    res.status(500).send("Error creating collection");
  }
});

// Route to handle adding a record
router.post("/add", async (req, res) => {
  const { name, lastName, age } = req.body;
  try {
    await addRecord(name, lastName, age);
    res.redirect("/lesson10?message=Record added successfully");
  } catch (err) {
    console.error("Error adding record:", err);
    res.status(500).send("Error adding record");
  }
});

router.post("/update", async (req, res) => {
  const { id, name, lastName, age } = req.body;
  updateRecord(id, name, lastName, age, res);
});

// Route to handle deleting a record
router.post("/delete", async (req, res) => {
  const { name } = req.body;
  try {
    await deleteRecord(name);
    res.redirect("/lesson10?message=delete successfully");
  } catch (err) {
    console.error("Error deleting record:", err);
    res.status(500).send("Error deleting record");
  }
});

// Route to display all records
router.post("/display", async (req, res) => {
  try {
    const allRecords = await showRecords();
    res.json(allRecords);
  } catch (err) {
    console.error("Error displaying records:", err);
    res.status(500).send("Error displaying records");
  }
});

// Route to drop a collection
router.post("/drop-collection", async (req, res) => {
  const { title } = req.body;
  try {
    await dropCollection(title);
    res.send(`Collection "${title}" dropped successfully.`);
  } catch (err) {
    console.error("Error dropping collection:", err);
    res.status(500).send("Error dropping collection");
  }
});

// Function to retrieve all records from the database
async function showRecords() {
  const client = await MongoClient.connect(url);
  const db = client.db();
  const collection = db.collection(collectionName);
  const allRecords = await collection.find({}).toArray();
  client.close();
  return allRecords;
}

// Function to add a record to the database
async function addRecord(name, lastName, age) {
  const client = await MongoClient.connect(url);
  const db = client.db();
  const collection = db.collection(collectionName);
  const object = { name, lastName, age };
  await collection.insertOne(object);
  client.close();
}

// Function to update a record in the database
async function updateRecord(id, name, lastName, age, res) {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db();
    const collection = db.collection(collectionName);

    const filter = { _id: new ObjectId(id) };
    const update = { $set: { name, lastName, age } };
    const result = await collection.updateOne(filter, update);

    client.close();

    if (result.modifiedCount === 1) {
      res.redirect("/lesson10");
    } else if (result.matchedCount === 0) {
      res.status(404).send("Record not found");
    } else {
      res.status(500).send("Error updating record: No documents modified");
    }
  } catch (err) {
    console.error("Error updating record:", err);
    res.status(500).send(`Error updating record: ${err.message}`);
  }
}

// Function to delete a record from the database
async function deleteRecord(name) {
  const client = await MongoClient.connect(url);
  const db = client.db();
  const collection = db.collection(collectionName);
  const filter = { name };
  await collection.deleteOne(filter);
  client.close();
}

// Function to drop a collection from the database
async function dropCollection(title) {
  const client = await MongoClient.connect(url);
  const db = client.db();
  await db.dropCollection(title);
  client.close();
}

// Function to create a collection in the database
async function createCollection(title) {
  const client = await MongoClient.connect(url);
  const db = client.db();
  await db.createCollection(title);
  client.close();
}

// Export the router
module.exports = router;
