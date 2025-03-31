const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Połączono z MongoDB (mem-db)'))
  .catch(err => console.error('Błąd połączenia z MongoDB:', err));

const authRoutes = require('./api/auth/authRoutes');
const postRoutes = require('./api/posts/post.routes');

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;