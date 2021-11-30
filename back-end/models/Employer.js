//added this in, not in express template, required by mongoose

var mongoose = require('mongoose');

var EmployerSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true, 'Company Name is Required']
    },
    city:String,
    contact:String,
    area:String,
    phone:String,
    max_interns:{
        type:Number,
        min:2
    }
});

module.exports = mongoose.model('Employer', EmployerSchema);