const express = require("express");
const router = express.Router();
const { register, login, user, getUsers } = require("./authController");

router.post("/register", register);

router.post("/login", login);

router.get("/user", user);

router.get("/users", getUsers);

module.exports = router;
