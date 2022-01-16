let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let mongoose = require('mongoose');
let User = mongoose.model('User');

passport.use(new LocalStrategy({
  usernameField: 'user[userName]',
  passwordField: 'user[password]'
}, function(userName, password, done) {
  User.findOne({userName: userName}).then(function(user){
    if(!user || !user.validPassword(password)){
      return done(null, false, {errors: {'Username or password': 'is invalid'}});
    }
    return done(null, user);
  }).catch(done);
}));


