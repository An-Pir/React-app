const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Получить все отзывы
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Добавить отзыв
router.post('/', async (req, res) => {
  const review = new Review({
    name: req.body.name,
    comment: req.body.comment,
    rating: req.body.rating
  });
  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;