// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://amitmishra4447:Hello@cluster0.vpplptl.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  name: String,
  branch: String,
  year: String,
  college: String,
  event: String
});

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
  const { name, branch, year, college, event } = req.body;
  const newUser = new User({ name, branch, year, college, event });
  try {
    await newUser.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send('Error registering user');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
