//added this in, not in express template, required by mongoose

var mongoose = require('mongoose');

var MoviesSchema = new mongoose.Schema({
  title: {
    type:String,
    required:[true, 'A title is required.']
  },
  director: String,
  bio: String,
  cover: String,
  thumbnail: String,
  year: String,
  genre: String,
  rated: String,
  time: String,
  rating: String,
});

module.exports = mongoose.model('Movies', MoviesSchema);