const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
// for passport-local middleware
const LocalStrategy = require('passport-local').Strategy;
const configFolder = require('./newConfig/keys');
const User = require('./models/users');

// passport relies on its own strategies

// JSON WEB TOKEN STRATEGY
// call passport
// JwtStrategy tells us where the token is contained and where the secret is
passport.use( new JwtStrategy({
  // passport-jwt is only interested in where the token is contained and the secret
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: configFolder.JWT_SECRET
}, async(payload, done) => {
  try {
    // find the user specified in the token
    const user = await User.findById(payload.sub);
    // if the user doesnt exist, handle it
    if(!user) {
      return done(null, false);
    }
    // otherwise, return the user
    done(null, user);
  } catch(error) {
    done(error, false);
  }
}))

// LOCAL STRATEGY
passport.use(new LocalStrategy({
  // interested in what the user name should be
  // by default, passport-local assumes you want to verify with username and password, not email and password
    // to handle that specify that usernameField is = to the email
    usernameField: 'email',
}, async (email, password, done) => {
  try {
  // find the user, given their email, check to see if the email exists
  const user = await User.findOne({email: email})
  // if the email doesnt exist, handle it
  if(!user) {
    return done(null, false);
  }
  // if the user is found, check if the pw is correct
  const isMatch = await user.isValidPassword(password);
  // if pw is incorrect, handle it
  if(!isMatch) {
    return done(null, false);
  }
  // otherwise, return the user
  done(null, user);
  } catch(error) {
    done(error, false);
  }
}))