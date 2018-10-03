var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    //Peter Says: We have to get a specific token from a google APIs project?
    clientID: "http://1090937809988-h56ijsfn9dt8qfdebdr2ioc1mj3fg8g2.apps.googleusercontent.com/",
    clientSecret: "ZEbNC8hK0Uq9w5_5RLQumVUB"
    // callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));

