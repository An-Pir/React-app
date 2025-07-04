const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: String,
  comment: String,
  rating: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);