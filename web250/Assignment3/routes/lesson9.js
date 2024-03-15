const express = require("express");
const { buildResponse } = require("../helpers/view");
const mysql = require("mysql");
const router = express.Router();
const path = require("path");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mykyta28",
  database: "your_database_name",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  const createDatabaseQuery = "CREATE DATABASE IF NOT EXISTS my_db";
  db.query(createDatabaseQuery, function (err, result) {
    if (err) throw err;
    console.log("Database created or exists");
  });

  const createTableQuery =
    "CREATE TABLE IF NOT EXISTS events (id INT AUTO_INCREMENT PRIMARY KEY, date DATE, event VARCHAR(255), age INT)";
  db.query(createTableQuery, function (err, result) {
    if (err) throw err;
    console.log("Table created or exists");
  });
});

router.use(express.static(path.join(__dirname, "public")));

router.get("/", (req, res) => {
  res.send(buildResponse("./templates/lesson9/lesson9.html"));
});

router.post("/add-record", (req, res) => {
  const { date, event, age } = req.body;
  addRecord(date, event, age, res);
});

router.post("/update-record", (req, res) => {
  const { id, date, event, age } = req.body;
  updateRecord(id, date, event, age, res);
});

router.post("/delete-record", (req, res) => {
  const { id } = req.body;
  deleteRecord(id, res);
});

router.post("/show-records", (req, res) => {
  showRecords(res);
});

function showRecords(res) {
  const selectSql = "SELECT * FROM events";

  db.query(selectSql, (err, selectResult) => {
    if (err) {
      console.error("Error executing SELECT query:", err.message);
      return res.status(500).send("Error executing SELECT query");
    }

    const tableRows = selectResult.map((row) => {
      return `<tr><td>${row.id}</td><td>${row.date}</td><td>${row.event}</td><td>${row.age}</td></tr>`;
    });

    const html = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Customer Data</title>
            <style>
              table {
                width: 100%;
                border-collapse: collapse;
              }

              th, td {
                padding: 10px;
                border: 1px solid #ccc;
              }

              th {
                background-color: #f2f2f2;
                text-align: left;
              }

              tr:nth-child(even) {
                background-color: #f2f2f2;
              }

              tr:hover {
                background-color: #ddd;
              }

              .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #007bff;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                border: 1px solid gray;
                margin-top: 20px;
                transition: background-color 0.3s ease;
              }

              .button:hover {
                background-color: #0056b3;
              }

            </style>
          </head>
          <body>
            <h1>Customer Data</h1>
            <table border="1">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Event</th>
                  <th>Age</th>
                  <!-- Add more headers based on your actual columns -->
                </tr>
              </thead>
              <tbody>
                ${tableRows.join("")}
              </tbody>
            </table>

            <a href="/lesson9" class="button">⬅️ Back</a>
          </body>
          </html>
        `;

    res.send(html);
  });
}

function addRecord(date, event, age, res) {
  const insertQuery = "INSERT INTO events (date, event, age) VALUES (?, ?, ?)";
  db.query(insertQuery, [date, event, age], (err) => {
    if (err) throw err;
    showRecords(res);
  });
}

function updateRecord(id, date, event, age, res) {
  const updateQuery = "UPDATE events SET date=?, event=?, age=? WHERE id=?";
  db.query(updateQuery, [date, event, age, id], (err) => {
    if (err) throw err;
    showRecords(res);
  });
}

function deleteRecord(id, res) {
  const deleteQuery = "DELETE FROM events WHERE id=?";
  db.query(deleteQuery, [id], (err) => {
    if (err) throw err;
    showRecords(res);
  });
}

module.exports = router;
