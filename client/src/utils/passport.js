import React from "react";
import GoogleStrategy from "passport-google-oauth";



const passport =  {
  var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
  
  // var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
  
  //Requiring the yarn google oauth package
  
  
  
  // Use the GoogleStrategy within Passport.
  //   Strategies in Passport require a `verify` function, which accept
  //   credentials (in this case, an accessToken, refreshToken, and Google
  //   profile), and invoke a callback with a user object.

  passport.use(new GoogleStrategy({
      //Peter Says: We have to get a specific token from a google APIs project?
      clientID: "http://1090937809988-h56ijsfn9dt8qfdebdr2ioc1mj3fg8g2.apps.googleusercontent.com/",
      clientSecret: "ZEbNC8hK0Uq9w5_5RLQumVUB",
      callbackURL: "localhost:3000/home"
    },
    function(accessToken, refreshToken, profile, done) {
         User.findOrCreate({ googleId: profile.id }, function (err, user) {
           return done(err, user);
         });
    }
  ));
  

}
export default passport;
//I have export in here twice

