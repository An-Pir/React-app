const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  category: String,
  description: String
});

module.exports = mongoose.model('Project', projectSchema);