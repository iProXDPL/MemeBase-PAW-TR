const User = require("./User.js");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const createToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "90d",
  });
};

exports.user = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(200).json({
        status: "success",
        user: null,
      });
    }
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);

    currentUser.password = undefined;

    if (!currentUser)
      res
        .status(401)
        .json({ error: "Użytkownik do którego istnieje token, nie istnieje" });

    res.status(200).json({
      status: "success",
      user: currentUser,
    });
  } catch (err) {
    res.status(500).json({ error: "Błąd weryfikacji" });
  }
};

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Użytkownik lub email już istnieje" });
    }

    const user = new User({ username, email, password, role: "user" });
    await user.save();

    const token = createToken(user);
    res.status(201).json({ token, data: { user } });
  } catch (err) {
    res.status(500).json({ error: "Błąd rejestracji" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");
  console.log(user);

  if (!user)
    return res.status(400).json({ error: "Nieprawidłowe dane logowania" });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).json({ error: "Nieprawidłowe hasło" });

  const token = createToken(user);
  user.password = undefined;
  res.status(201).json({ token, data: { user } });
};

exports.getUsers = async (req, res) => {
  try {
    if (req.query.id) {
      const user = await User.findById(req.query.id).select("-password");
      if (!user)
        return res.status(404).json({ error: "Nie znaleziono użytkownika" });
      return res.json(user);
    } else if (req.query.username) {
      const user = await User.findOne({ username: req.query.username }).select(
        "-password"
      );
      if (!user)
        return res.status(404).json({ error: "Nie znaleziono użytkownika" });
      return res.json(user);
    } else {
      const users = await User.find().select("-password");
      if (!users)
        return res.status(404).json({ error: "Nie znaleziono użytkowników" });
      res.json(users);
    }
  } catch (err) {
    res.status(500).json({ error: "Błąd pobierania użytkowników" });
  }
};
