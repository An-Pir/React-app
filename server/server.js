const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Мидлвары
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Импорт роутов
const servicesRouter = require('./routes/services');
const reviewsRouter = require('./routes/reviews');
const projectsRouter = require('./routes/projects');
const blogRouter = require('./routes/blog');
const contactsRouter = require('./routes/contacts');

// Маршруты API
app.use('/api/services', servicesRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/blog', blogRouter);
app.use('/api/contacts', contactsRouter);

// Запуск сервера
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});