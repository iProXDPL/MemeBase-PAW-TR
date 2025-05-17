const User = require("../auth/User");
const Post = require("../posts/post.model");

exports.getRanking = async (req, res) => {
  try {
    const users = await User.find({})
      .sort({ totalLikes: -1, totalDislikes: 1, totalPosts: -1 })
      .limit(50)
      .select("-password");
    if (users.length === 0) {
      return res.status(404).json({ message: "Nie znaleziono użytkowników" });
    }
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: "Błąd pobierania rankingu" });
  }
};

exports.getBestMeme = async (req, res) => {
  try {
    const bestMeme = await Post.aggregate([
      {
        $addFields: {
          score: { $subtract: [{ $size: "$likes" }, { $size: "$dislikes" }] },
        },
      },
      {
        $sort: { score: -1 },
      },
      {
        $limit: 1,
      },
    ]);
    if (bestMeme.length === 0) {
      return res
        .status(404)
        .json({ message: "Nie znaleziono najlepszego mema" });
    }
    res.status(200).json(bestMeme[0]);
  } catch (err) {
    res.status(500).json({ error: "Błąd pobierania najlepszego mema" });
  }
};

exports.getWorstMeme = async (req, res) => {
  try {
    const worstMeme = await Post.aggregate([
      {
        $addFields: {
          score: { $subtract: [{ $size: "$likes" }, { $size: "$dislikes" }] },
        },
      },
      {
        $sort: { score: 1 }, // Najgorszy post (największa różnica na minus)
      },
      {
        $limit: 1,
      },
    ]);
    if (worstMeme.length === 0) {
      return res
        .status(404)
        .json({ message: "Nie znaleziono najgorszego mema" });
    }
    res.status(200).json(worstMeme[0]);
  } catch (err) {
    res.status(500).json({ error: "Błąd pobierania najgorszego mema" });
  }
};
