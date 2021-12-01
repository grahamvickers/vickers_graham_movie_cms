var express = require('express');
var path = require('path'); //had to add
var router = express.Router();

var mongoose = require('mongoose');
var Movie = require('../models/Movies.js');


router.get('/api/movies', function(req, res, next) {
  Movie.find(function (err, movies) {
    if (err) return next(err);
    res.json(movies);
  });
});


router.get('/api/movies/list', function(req, res, next) {
  Movie.find(function (err, movies) {
    if (err) return next(err);
    res.render('index', { title: 'Movie List', movies:movies });
  });
});

router.get('/api/movies/sorted', function(req, res, next) {
  Movie.find({}).sort({'rating': 1}).exec(function (err, movies) {
    if (err) return next(err);
    res.render('index', { title: 'Movies Sorted', movies:movies });
  });
});

router.get('/api/movie/:id', function(req, res, next) {
 Movie.findById(req.params.id, function (err, movie) {
    if (err) return next(err);
    // res.json(movie);
    res.render('details', { title: 'Movie Details', movie });

  });
});


router.get('/api/movie/create', function(req, res, next) {
  Movie.find(function (err, movies) {
    if (err) return next(err);
    res.render('create', { title: 'Create Movie' });
  });
});


router.post('/api/movie/new', function(req, res, next) {
  Movie.create(req.body, function (err, movie) {
    if (err) return next(err);
    res.redirect('/api/movies/sorted');
  });
});

router.get('/api/movie/delete/:id', function(req, res, next) {
  Movie.findByIdAndDelete(req.params.id, function (err, post) {
    if (err) return next(err);
    res.redirect('/api/movies/sorted');
  });
});

router.post('/', function(req, res, next) {
  Movie.create('sample', function (err, post) {
    if (err) return next(err);
    //res.json(post);
  });
});

// pull the specific document/ row using _id 
// 'fill in' a copy of the create form (the same form and fields) with tbl variables
// submit the form via post and do the update
router.put('/:id', function(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Movie.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});




module.exports = router;