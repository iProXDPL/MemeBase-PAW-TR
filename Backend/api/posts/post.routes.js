/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Operacje CRUD na memach (postach)
 */
const swagger = require("../../swagger");
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
/**
 * @swagger
 * /api/posts/ping:
 *   get:
 *     summary: Sprawdzenie działania endpointu
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Odpowiedź testowa
 */

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
  RandomPost,
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
 *                 description: "Kiedy wszystko działa"
 *                 image: "uploads/mem.jpg"
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
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
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
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
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
 *     responses:
 *       200:
 *         description: Post usunięty
 */
router.delete("/:id", deletePost);

/**
 * @swagger
 * /api/posts/like/{id}:
 *   post:
 *     summary: Dodaj polubienie do posta
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Polubienie dodane
 */
router.post("/like/:id", addLike);

/**
 * @swagger
 * /api/posts/like/{id}:
 *   delete:
 *     summary: Usuń polubienie z posta
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Polubienie usunięte
 */
router.delete("/like/:id", Unlike);

/**
 * @swagger
 * /api/posts/dislike/{id}:
 *   post:
 *     summary: Dodaj dislajka do posta
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dislajk dodany
 */
router.post("/dislike/:id", addDislike);

/**
 * @swagger
 * /api/posts/dislike/{id}:
 *   delete:
 *     summary: Usuń dislajka z posta
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dislajk usunięty
 */
router.delete("/dislike/:id", UnDislike);

/**
 * @swagger
 * /api/posts/ping:
 *   get:
 *     summary: Sprawdzenie działania endpointu
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Odpowiedź testowa
 */
router.get("/random", RandomPost);

module.exports = router;
