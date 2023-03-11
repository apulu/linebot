const linebot = require('linebot');
const express = require('express');
const mongoose = require('mongoose');
const linebotParser = require('./bot.event')

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://yodb:<TVRj13HVb6rblVdk>@cluster001.t9lf0q6.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express();
// Handle static files
app.use('/images',express.static(__dirname+'/images'));

// Handle webhook
app.post('/', linebotParser);

// Routes
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Ninja Hattori is running on port ${PORT}`))
