const Post = require("./post.model");
const jwt = require("jsonwebtoken");
const User = require("../auth/User.js");
const fs = require("fs");
const { promisify } = require("util");

async function checkUser(req) {
  var token = req.headers.authorization;

  if (!token) {
    return false;
  }
  token = req.headers.authorization.split(" ")[1];
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id);
  return currentUser;
}

exports.getPosts = async (req, res) => {
  try {
    if (req.query.author) {
      const posts = await Post.find({ author: req.query.author }).populate(
        "author"
      );
      return res.json(posts);
    } else if (req.query.id) {
      const posts = await Post.find({ _id: req.query.id }).populate("author");
      return res.json(posts);
    } else {
      const posts = await Post.find().populate("author");
      res.json(posts);
    }
  } catch (err) {
    res.status(500).json({ error: "Błąd pobierania postów" });
  }
};

exports.createPost = async (req, res) => {
  try {
    const currentUser = await checkUser(req);
    if (currentUser) {
      const { description } = req.body;
      if (!description) {
        return res.status(400).json({ error: "Nie dodano opisu" });
      }
      const image = req.file ? req.file.path : "";
      if (!image) {
        return res.status(400).json({ error: "Nie dodano zdjęcia" });
      }
      const post = new Post({ author: currentUser._id, image, description });
      const postAuthor = await User.findOne({ username: currentUser.username });
      if (postAuthor.totalPosts >= 0) {
        postAuthor.totalPosts = Math.max(0, postAuthor.totalPosts + 1);
        await postAuthor.save();
      }
      await post.save();
      res
        .status(201)
        .json({ message: "Post created successfully", data: { post } });
    } else {
      res.status(500).json({ error: "Brak autoryzacji" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const currentUser = await checkUser(req);
    const { description } = req.body;
    const image = req.file ? req.file.path : "";
    if (!req.params.id)
      return res.status(404).json({ error: "Nie podałeś id" });
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post nie istnieje" });
    if (currentUser.username == post.author || currentUser.role == "admin") {
      if (image && post.image && post.image !== image) {
        try {
          fs.unlinkSync(post.image);
        } catch (e) {}
      }
      post.description = description;
      post.image = image;
      await post.save();
      res.status(201).json({ message: "Post zaktualizowany" });
    } else {
      return res.status(401).json({ error: "Brak autoryzacji" });
    }
  } catch (err) {
    res.status(400).json({ error: "Nie udało się zaktualizować posta" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const currentUser = await checkUser(req);

    if (!currentUser)
      return res.status(401).json({ error: "Brak autoryzacji" });

    const post = await Post.findById(req.params.id).populate("author");
    if (!post) return res.status(404).json({ error: "Post nie istnieje" });

    const isCurrentUserAuthor =
      currentUser._id.toString() === post.author._id.toString();

    if (isCurrentUserAuthor || currentUser.role == "admin") {
      const postAuthor = await User.findById(currentUser._id);
      await Post.findByIdAndDelete(req.params.id);

      if (postAuthor) {
        postAuthor.totalPosts = Math.max(0, postAuthor.totalPosts - 1);
        postAuthor.totalLikes = Math.max(
          0,
          postAuthor.totalLikes - post.likes.length
        );
        postAuthor.totalDislikes = Math.max(
          0,
          postAuthor.totalDislikes - post.dislikes.length
        );
        await postAuthor.save();
      }

      if (post.image) {
        try {
          fs.unlinkSync(post.image);
        } catch (e) {}
      }

      res.json({ status: "success", message: "Post usunięty" });
    } else {
      return res.status(401).json({ error: "Brak autoryzacji" });
    }
  } catch (err) {
    res.status(400).json({ error: "Nie udało się usunąć posta" });
  }
};

exports.addLike = async (req, res) => {
  try {
    const currentUser = await checkUser(req);
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post nie istnieje" });
    if (post.likes.includes(currentUser.username)) {
      return res.status(400).json({ error: "Już polubiłeś ten post" });
    }
    const postAuthor = await User.findOne({ username: post.author });
    if (post.dislikes.includes(currentUser.username)) {
      post.dislikes = post.dislikes.filter(
        (dislike) => dislike !== currentUser.username
      );

      if (postAuthor) {
        postAuthor.totalDislikes = Math.max(0, postAuthor.totalDislikes - 1);
        await postAuthor.save();
      }
    }

    post.likes.push(currentUser.username);
    await post.save();

    if (postAuthor) {
      postAuthor.totalLikes += 1;
      await postAuthor.save();
    }

    res.status(200).json({ message: "Polubienie dodane" });
  } catch (err) {
    res.status(400).json({ error: "Nie udało się dodać polubienia" });
  }
};

exports.Unlike = async (req, res) => {
  try {
    const currentUser = await checkUser(req);
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ error: "Post nie istnieje" });

    if (post.likes.includes(currentUser.username)) {
      post.likes = post.likes.filter((like) => like !== currentUser.username);
      await post.save();

      const postAuthor = await User.findOne({ username: post.author });
      if (postAuthor) {
        postAuthor.totalLikes = Math.max(0, postAuthor.totalLikes - 1);
        await postAuthor.save();
      }

      res.status(200).json({ message: "Polubienie usunięte" });
    } else {
      return res.status(400).json({ error: "Nie można usunąć polubienia" });
    }
  } catch (err) {
    res.status(400).json({ error: "Nie udało się usunąć polubienia" });
  }
};

exports.addDislike = async (req, res) => {
  try {
    const currentUser = await checkUser(req);
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ error: "Post nie istnieje" });

    if (post.dislikes.includes(currentUser.username)) {
      return res.status(400).json({ error: "Już zdislajkowałeś ten post" });
    }
    const postAuthor = await User.findOne({ username: post.author });
    if (post.likes.includes(currentUser.username)) {
      post.likes = post.likes.filter((like) => like !== currentUser.username);

      if (postAuthor) {
        postAuthor.totalLikes = Math.max(0, postAuthor.totalLikes - 1);
        await postAuthor.save();
      }
    }

    post.dislikes.push(currentUser.username);
    await post.save();

    if (postAuthor) {
      postAuthor.totalDislikes += 1;
      await postAuthor.save();
    }

    res.status(200).json({ message: "Dislajk dodany" });
  } catch (err) {
    res.status(400).json({ error: "Nie udało się dodać dislajka" });
  }
};

exports.UnDislike = async (req, res) => {
  try {
    const currentUser = await checkUser(req);
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ error: "Post nie istnieje" });

    if (post.dislikes.includes(currentUser.username)) {
      post.dislikes = post.dislikes.filter(
        (dislike) => dislike !== currentUser.username
      );
      await post.save();

      const postAuthor = await User.findOne({ username: post.author });
      if (postAuthor) {
        postAuthor.totalDislikes = Math.max(0, postAuthor.totalDislikes - 1);
        await postAuthor.save();
      }

      res.status(200).json({ message: "Dislajk usunięty" });
    } else {
      return res.status(400).json({ error: "Nie można usunąć dislajka" });
    }
  } catch (err) {
    res.status(400).json({ error: "Nie udało się usunąć dislajka" });
  }
};

exports.RandomPost = async (req, res) => {
  try {
    const posts = await Post.find();
    if (posts.length === 0) {
      return res.status(404).json({ error: "Brak postów" });
    }
    const randomIndex = Math.floor(Math.random() * posts.length);
    const randomPost = posts[randomIndex];
    res.json(randomPost);
  } catch (err) {
    res.status(500).json({ error: "Błąd pobierania postów" });
  }
};
