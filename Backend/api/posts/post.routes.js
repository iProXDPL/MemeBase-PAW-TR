/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Operacje CRUD na memach (postach)
 */

const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/ping", (req, res) => {
  res.json({ message: "Działa! asdbgjaervqwclqw we w " });
});

const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  addLike,
  addDislike,
  Unlike,
  UnDislike,
  RandomPost
} = require("./post.controller");

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Pobierz wszystkie posty
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista postów
 *         content:
 *           application/json:
 *             example:
 *               - _id: "6610d20d8a22c928e8fe67a1"
 *                 title: "Kiedy wszystko działa"
 *                 imageUrl: "https://i.imgur.com/example.jpg"
 *                 author: "660aaa123bbb456ccc789ddd"
 *                 createdAt: "2024-03-29T19:00:00.000Z"
 */
router.get("/", getPosts);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Utwórz nowy post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             description: "Mój mem dnia"
 *             image: "https://i.imgur.com/mem.jpg"
 *     responses:
 *       201:
 *         description: Post utworzony
 */
router.post("/", upload.single("image"), createPost);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Edytuj post po ID
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         example: "6610d20d8a22c928e8fe67a1"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             description: "Nowy tytuł mema"
 *             image: "https://i.imgur.com/nowy.jpg"
 *     responses:
 *       200:
 *         description: Post zaktualizowany
 */
router.put("/:id", upload.single("image"), updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Usuń post po ID
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         example: "6610d20d8a22c928e8fe67a1"
 *     responses:
 *       200:
 *         message: Post usunięty
 */
router.delete("/:id", deletePost);

router.post("/like/:id", addLike);

router.delete("/like/:id", Unlike);

router.post("/dislike/:id", addDislike);

router.delete("/dislike/:id", UnDislike);

router.get("/random", RandomPost);

module.exports = router;
