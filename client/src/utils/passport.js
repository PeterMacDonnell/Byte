// import GoogleStrategy from "passport-google-oauth";




var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var keys = require("./passportKeys")
  
passport.serializeUser(function(user, done) {
  done(null, user);
 });
 passport.deserializeUser(function(user, done) {
  done(null, user);
 });

 passport.use(
  new GoogleStrategy(
   {
    clientID: keys.authentication.clientID,
    clientSecret: keys.authentication.clientSecret,
    callbackURL: "localhost:3000/home"
    //http://localhost:4500/auth/google/callback hackernoon gives this format. Not sure about the last three paths
   },
   function(accessToken, refreshToken, profile, done) {
    var userData = {
     email: profile.emails[0].value,
     name: profile.displayName,
     token: accessToken
    };
    done(null, userData);
   }
  )
 );


















  // passport.use(new GoogleStrategy({
     
  //     clientID: "http://1090937809988-h56ijsfn9dt8qfdebdr2ioc1mj3fg8g2.apps.googleusercontent.com/",
  //     clientSecret: "ZEbNC8hK0Uq9w5_5RLQumVUB",
  //     callbackURL: "localhost:3000/home"
  //   },
  //   function(accessToken, refreshToken, profile, done) {
  //        User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //          return done(err, user);
  //        });
  //   }
  // ));
  




