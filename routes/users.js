var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('./users/login', {layout: 'auth', title: "Login ~ Spotify"});
});

module.exports = router;
