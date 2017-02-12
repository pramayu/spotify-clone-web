var LocalStrategy = require('passport-local').Strategy;
var model = require('../models');
var bcrypt = require('bcrypt-nodejs');


module.exports = function(passport){
  passport.use(new LocalStrategy(function(username, password, done){
    var hashedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    model.users.findOne({
      where: {
        username: username
      }
    }).then(function(user, err){
      if(err){
        return done(err);
      }
      if(!user){
        return done(null, false);
      }
      if(!bcrypt.compareSync(password, user.password)){
        return done(null, false);
      }
      return done(null, user);
    })
  }));

  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
    model.users.findById(id).then(function(user){
      done(null, user);
    });
  });
};
