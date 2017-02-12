var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./users/main', {layout: 'auth', title: "Login ~ Spotifer."});
});

router.get('/login', function(req, res, next){
  res.render('./users/login', {layout: 'auth', title: "Login ~ Spotifer."});
});

router.get('/signup', function(req, res, next){
  res.render('./users/signup', {layout: 'auth', title: "Sign Up ~ Spotifer."});
});

module.exports = router;
