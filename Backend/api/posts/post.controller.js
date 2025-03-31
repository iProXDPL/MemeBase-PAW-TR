const Post = require('./post.model');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Błąd pobierania postów' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username');
    if (!post) return res.status(404).json({ error: 'Post nie istnieje' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Błąd pobierania postu' });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, imageUrl, author } = req.body;
    const post = new Post({ title, imageUrl, author });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: 'Nie udało się utworzyć posta' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, imageUrl },
      { new: true }
    );
    if (!post) return res.status(404).json({ error: 'Post nie istnieje' });
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: 'Nie udało się zaktualizować posta' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post nie istnieje' });
    res.json({ message: 'Post usunięty' });
  } catch (err) {
    res.status(400).json({ error: 'Nie udało się usunąć posta' });
  }
};