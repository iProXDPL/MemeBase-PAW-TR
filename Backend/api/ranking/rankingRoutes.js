/**
 * @swagger
 * tags:
 *   name: Ranking
 *   description: Ranking użytkowników i memów
 */
const swagger = require("../../swagger");
const express = require("express");
const router = express.Router();
const {
  getRanking,
  getBestMeme,
  getWorstMeme,
} = require("./ranking.controller");

/**
 * @swagger
 * /api/ranking:
 *   get:
 *     summary: Pobierz ranking użytkowników (max 50)
 *     tags: [Ranking]
 *     responses:
 *       200:
 *         description: Lista użytkowników posortowana wg popularności
 *         content:
 *           application/json:
 *             example:
 *               users:
 *                 - username: "janusz"
 *                   totalLikes: 123
 *                   totalDislikes: 10
 *                   totalPosts: 15
 *       404:
 *         description: Nie znaleziono użytkowników
 */
router.get("/", getRanking);

/**
 * @swagger
 * /api/ranking/best:
 *   get:
 *     summary: Pobierz najlepszego mema
 *     tags: [Ranking]
 *     responses:
 *       200:
 *         description: Najlepszy mem wg różnicy polubień i dislajków
 *         content:
 *           application/json:
 *             example:
 *               _id: "abc123"
 *               description: "Kiedy wszystko działa"
 *               likes: ["user1", "user2"]
 *               dislikes: []
 *               author:
 *                 username: "janusz"
 *       404:
 *         description: Nie znaleziono najlepszego mema
 */
router.get("/best", getBestMeme);

/**
 * @swagger
 * /api/ranking/worst:
 *   get:
 *     summary: Pobierz najgorszego mema
 *     tags: [Ranking]
 *     responses:
 *       200:
 *         description: Najgorszy mem wg różnicy polubień i dislajków
 *         content:
 *           application/json:
 *             example:
 *               _id: "xyz789"
 *               description: "Ten mem był zły"
 *               likes: []
 *               dislikes: ["userA", "userB"]
 *               author:
 *                 username: "janusz"
 *       404:
 *         description: Nie znaleziono najgorszego mema
 */
router.get("/worst", getWorstMeme);

module.exports = router;
