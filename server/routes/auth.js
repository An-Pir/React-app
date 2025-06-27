const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// --- РЕГИСТРАЦИЯ ---
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Проверка, существует ли пользователь
    const candidate = await User.findOne({ $or: [{ email }, { username }] });
    if (candidate) {
      return res.status(400).json({ message: 'Пользователь с таким email или именем уже существует' });
    }

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ username, email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: 'Пользователь успешно создан!' });

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

// --- АВТОРИЗАЦИЯ ---
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' });
    }

    // Создаем JWT токен
    const token = jwt.sign(
      { userId: user.id },
      'your_jwt_secret_key', // ВАЖНО: В реальном проекте используйте .env файл!
      { expiresIn: '1h' }
    );

    res.json({ token, userId: user.id, username: user.username });

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});


// --- Middleware для защиты роутов ---
const authMiddleware = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // "Bearer TOKEN"
        if (!token) {
            return res.status(401).json({ message: 'Нет авторизации' });
        }
        const decoded = jwt.verify(token, 'your_jwt_secret_key');
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({ message: 'Нет авторизации' });
    }
};

// --- Получение данных профиля (защищенный роут) ---
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password'); // Найти пользователя по ID из токена
        if (!user) {
            return res.status(404).json({ message: "Пользователь не найден" });
        }
        res.json(user);
    } catch (e) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});


module.exports = router;