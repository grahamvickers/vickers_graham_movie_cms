//added this in, not in express template, required by mongoose

var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  fname: {
    type:String,
    required:[true, 'A first name is required.']
  },
  lname: String,
  program: String,
  email: String,
  courses: [{ title: String,number: String }]
});

module.exports = mongoose.model('Student', StudentSchema);