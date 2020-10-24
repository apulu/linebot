const linebot = require('linebot');
const express = require('express');
const mongoose = require('mongoose');
const linebotParser = require('./bot.event')

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://test:QlTwLrqBrNwWf4si@cluster0.aslrj.mongodb.net/test?retryWrites=true&w=majority',
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
