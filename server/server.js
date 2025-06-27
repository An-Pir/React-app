const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use(express.json());


const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const servicesRouter = require('./routes/services');
const reviewsRouter = require('./routes/reviews');
const projectsRouter = require('./routes/projects');
const blogRouter = require('./routes/blog');
const contactsRouter = require('./routes/contacts');
const authRouter = require('./routes/auth');


app.use('/api/services', servicesRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/blog', blogRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/auth', authRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});