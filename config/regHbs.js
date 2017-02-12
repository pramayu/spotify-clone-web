var handleHbs = require('express-handlebars');
var _ = require('lodash');


var handleBar = handleHbs.create({
  defaultLayout: 'layout',
  layout: 'auth',
  extname: '.hbs',
  helpers: {
  }
});

module.exports = handleBar;
