const express = require("express");
const router = express.Router();
const { register, login, user } = require("./authController");

router.post("/register", register);

router.post("/login", login);

router.get("/user", user);

module.exports = router;
