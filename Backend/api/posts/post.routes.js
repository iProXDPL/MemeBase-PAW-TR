/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Operacje CRUD na memach (postach)
 */



const express = require('express');
const router = express.Router(); 

router.get('/ping', (req, res) => {
  res.json({ message: 'Działa! asdbgjaervqwclqw we w ' });
});

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('./post.controller');

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
router.get('/', getAllPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Pobierz post po ID
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
 *         description: Jeden post
 *         content:
 *           application/json:
 *             example:
 *               _id: "6610d20d8a22c928e8fe67a1"
 *               title: "Zabawny mem"
 *               imageUrl: "https://i.imgur.com/example.jpg"
 *               author: "660aaa123bbb456ccc789ddd"
 *               createdAt: "2024-03-29T19:00:00.000Z"
 */
router.get('/:id', getPostById);

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
 *             title: "Mój mem dnia"
 *             imageUrl: "https://i.imgur.com/mem.jpg"
 *             author: "660aaa123bbb456ccc789ddd"
 *     responses:
 *       201:
 *         description: Post utworzony
 */
router.post('/', createPost);


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
 *             title: "Nowy tytuł mema"
 *             imageUrl: "https://i.imgur.com/nowy.jpg"
 *     responses:
 *       200:
 *         description: Post zaktualizowany
 */
router.put('/:id', updatePost);


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
 *         description: Post usunięty
 */
router.delete('/:id', deletePost);

module.exports = router;