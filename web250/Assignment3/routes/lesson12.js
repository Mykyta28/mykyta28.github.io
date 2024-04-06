const express = require("express");
const { buildResponse } = require("../helpers/view");
const router = express.Router();
const Joi = require("joi");

router.use(express.json());

const users = [
  { id: 1, name: "Mykyta", lastName: "Semenii", age: 26 },
  { id: 2, name: "Valeriia", lastName: "Semenii", age: 22 },
  { id: 3, name: "Alena", lastName: "Korneva", age: 26 },
  { id: 4, name: "Vadim", lastName: "Belov", age: 26 },
  { id: 5, name: "Vladislad", lastName: "Serdobincev", age: 26 },
  { id: 6, name: "Vladlena", lastName: "Andres", age: 26 },
  { id: 7, name: "Artem ", lastName: "Dubrov", age: 25 },
];

router.get("/", (req, res) => {
  res.send(buildResponse("./templates/lesson12/lesson12.html"));
});

//Show all users
router.get("/api/users", (req, res) => {
  res.send(users);
});

//Find specific user
router.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res
      .status(404)
      .send(`The user with ${req.params.id} ID was not found!`);
  }
  res.send(user);
});

// Add user
router.post("/api/users", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    age: Joi.number().required(),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = {
    id: users.length + 1,
    name: value.name,
    lastName: value.lastName,
    age: value.age,
  };
  users.push(user);
  res.send(user);
});

//Update user
router.put("/api/users/:id", (req, res) => {
  const user = users.find((c) => c.id === parseInt(req.params.id));
  if (!user) {
    return res
      .status(404)
      .send(`The user with ${req.params.id} was not found!)`);
  }

  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    age: Joi.number().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  user.name = req.body.name;
  user.lastName = req.body.lastName;
  user.age = req.body.age;
  res.send(user);
});

// Delete user
router.delete("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res
      .status(404)
      .send(`The course with ${req.params.id} was not found!`);
  }

  const userIndex = users.indexOf(user);
  users.splice(userIndex, 1);
  res.send(`User with ID ${req.params.id} deleted successfully`);
});

module.exports = router;
