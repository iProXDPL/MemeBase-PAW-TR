const express = require("express");
const router = express.Router();
const {
  getRanking,
  getBestMeme,
  getWorstMeme,
} = require("./ranking.controller");

router.get("/", getRanking);
router.get("/best", getBestMeme);
router.get("/worst", getWorstMeme);

module.exports = router;
