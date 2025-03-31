const User = require('./User.js');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

exports.register = async (req, res) => {
    try {
      const { username, email, password } = req.body;

      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({ error: 'Użytkownik lub email już istnieje' });
      }
  
      const user = new User({ username, email, password, role: 'user' });
      await user.save();
  
      const token = createToken(user);
      res.status(201).json({ token });
    } catch (err) {
      res.status(500).json({ error: 'Błąd rejestracji' });
    }
  };

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: 'Nieprawidłowe dane logowania' });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).json({ error: 'Nieprawidłowe hasło' });

  const token = createToken(user);
  res.json({ token });
};