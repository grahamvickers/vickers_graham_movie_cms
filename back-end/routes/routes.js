var express = require('express');
var path = require('path'); //had to add
var router = express.Router();

var mongoose = require('mongoose');
var Student = require('../models/Student.js');
var Employer = require('../models/Employer.js');


router.get('/api/students', function(req, res, next) {
  Student.find(function (err, students) {
    if (err) return next(err);
	res.json(students);
  });
});


router.get('/api/students/list', function(req, res, next) {
  Student.find(function (err, students) {
    if (err) return next(err);
    res.render('index', { title: 'Class List', students:students });
  });
});

router.get('/api/students/sorted', function(req, res, next) {
  Student.find({}).sort({'lname': 1}).exec(function (err, students) {
    if (err) return next(err);
    res.render('index', { title: 'Student Sorted', students:students });
  });
});

router.get('/api/student/:id', function(req, res, next) {
 Student.findById(req.params.id, function (err, student) {
    if (err) return next(err);
    // res.json(student);
    res.render('details', { title: 'Student Details', student });

  });
});

router.post('/api/student/new', function(req, res, next) {
  Student.create(req.body, function (err, student) {
    if (err) return next(err);
    res.redirect('/api/students/sorted');
  });
});

router.get('/api/student/delete/:id', function(req, res, next) {
  Student.findByIdAndDelete(req.params.id, function (err, post) {
    if (err) return next(err);
    res.redirect('/api/students/sorted');
  });
});

router.post('/', function(req, res, next) {
  Student.create('sample', function (err, post) {
    if (err) return next(err);
    //res.json(post);
  });
});

// pull the specific document/ row using _id 
// 'fill in' a copy of the create form (the same form and fields) with tbl variables
// submit the form via post and do the update
router.put('/:id', function(req, res, next) {
  Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Student.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.get('/api/employers', function(req, res, next) {
  Employer.find(function (err, employers) {
    if (err) return next(err);
	res.json(employers);
  });
});


module.exports = router;