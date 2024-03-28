const express = require("express");
const { buildResponse } = require("../helpers/view");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);
const router = express.Router();
const mongoose = require("mongoose");
const UserModel = require("../module/User");
const bcrypt = require("bcryptjs");

const url = "mongodb://localhost:27017/session";

router.use(express.urlencoded({ extended: false }));

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const store = new MongoDBSession({
  uri: url,
  collection: "mySessions",
});

router.use(
  session({
    secret: "string",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
const isAuth = (req, res, next) => {
  if (req.session.user) next();
  else res.redirect("/lesson11/login");
};
const isNotAuth = (req, res, next) => {
  if (!req.session.user) next();
  else res.redirect("/lesson11/account");
};

router.get("/", (req, res) => {
  res.send(buildResponse("./templates/lesson11/lesson11.html"));
});

router.get("/login", isNotAuth, (req, res) => {
  res.send(buildResponse("./templates/lesson11/login.html"));
});

router.post("/login", isNotAuth, async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.render("/lesson11/login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.render("/lesson11/login");
  }

  req.session.user = user;
  res.redirect("/lesson11/account");
});

router.get("/register", isNotAuth, (req, res) => {
  res.send(buildResponse("./templates/lesson11/register.html"));
});

router.post("/register", isNotAuth, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  let user = await UserModel.findOne({ email });

  if (user) {
    return res.send(buildResponse("./templates/lesson11/register.html"));
  }
  try {
    const hashPassword = await bcrypt.hash(password, 12);

    user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    await user.save();

    res.redirect("/lesson11/login");
  } catch (error) {
    console.error("Error registering user:", error);
    res.send("Error registering user");
  }
});

router.get("/account", isAuth, (req, res) => {
  const user = req.session.user;
  res.send(
    buildResponse("./templates/lesson11/account.html", {
      firstName: user.firstName,
      lastName: user.lastName,
    })
  );
});

router.post("/logout", isAuth, (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/lesson11/login");
  });
});

module.exports = router;
