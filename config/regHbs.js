var handleHbs = require('express-handlebars');
var _ = require('lodash');


var handleBar = handleHbs.create({
  defaultLayout: 'layout',
  extname: '.hbs',
  helpers: {
  }
});

module.exports = handleBar;
