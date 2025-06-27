const express = require('express');
const router = express.Router();
const Project = require('../models/Project');


router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const project = new Project({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    category: req.body.category,
    description: req.body.description
  });
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;