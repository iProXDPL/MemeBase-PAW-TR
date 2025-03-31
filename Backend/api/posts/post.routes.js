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

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;