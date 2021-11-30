//added this in, not in express template, required by mongoose

var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  title: {
    type:String,
    required:[true, 'A title for the movie is required.']
  },
  director: String,
  bio: String,
  cover: String,
  thumbnail: String,
  year: String,
  genre: String,
  rated: String,
  time: String,
  rating: Number
},
{collection:"movies"}

);

module.exports = mongoose.model('Movie', MovieSchema);