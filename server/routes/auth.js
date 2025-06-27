const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// Регистрация
router.post('/register', async (req, res) => {
  console.log('[REGISTER BODY]', req.body);
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Все поля обязательны' });
    }
    const candidate = await User.findOne({ email });
    if (candidate) return res.status(400).json({ message: 'Email уже занят' });
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hash });
    await user.save();
    return res.status(201).json({ message: 'Пользователь зарегистрирован' });
  } catch (e) {
    console.error('REGISTER ERROR:', e);
    res.status(500).json({ message: 'Ошибка сервера: ' + e.message });
  }
});

// Вход
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'Неверный email или пароль' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Неверный email или пароль' });
    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET || 'devsecretkey',
      { expiresIn: '1h' }
    );
    res.json({
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (e) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;
