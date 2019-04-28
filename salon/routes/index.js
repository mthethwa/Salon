var express = require('express');
var router = express.Router();


router.get('/tracking', function(req, res, next) {
  res.render('tracking');
});

router.get('/hairdresser', function(req, res, next) {
  res.render('hairdresser');
});

router.get('/client', function(req, res, next) {
  res.render('client');
});



router.get('/booking', function(req, res, next) {
  res.render('booking');
});

router.get('/add-employee', function(req, res, next) {
  res.render('add-employee');
});

router.get('/add-service', function(req, res, next) {
  res.render('add-service');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
