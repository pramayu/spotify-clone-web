var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./users/main', {layout: 'auth', title: "Login ~ Spotifer."});
});

router.get('/login', function(req, res, next){
  res.render('./users/login', {layout: 'auth', title: "Login ~ Spotifer."})
});

module.exports = router;
