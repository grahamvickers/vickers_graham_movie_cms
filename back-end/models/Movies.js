//added this in, not in express template, required by mongoose

var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  title: {
    type:String,
    required:[true, 'A title for the movie is required.']
  },
  director:{
    type:String,
    required:[true, 'A director for the movie is required.']
  },
  bio: {
    type:String,
    required:[true, 'A bio for the movie is required.']
  },
  cover:{
    type:String,
    required:[true, 'A cover for the movie is required.']
  },
  thumbnail: {
    type:String,
    required:[true, 'A thumbnail for the movie is required.']
  },
  year: {
    type:String,
    required:[true, 'A year for the movie is required.']
  },
  genre: {
    type:String,
    required:[true, 'A genre for the movie is required.']
  },
  rated: {
    type:String,
    required:[true, 'A audience rating for the movie is required.']
  },
  time: {
    type:String,
    required:[true, 'A run time for the movie is required.']
  },
  rating: {
    type:Number,
    required:[true, 'A rating for the movie is required.']
  },
},
{collection:"movies"}

);

module.exports = mongoose.model('Movie', MovieSchema);