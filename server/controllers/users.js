// this folder handles the functions that get called
// inside of routes/users.js

// need json-web-token middleware to help with handling web tokens
const JWT = require('jsonwebtoken');

// need to import the model for the user into here so the functions have access to them
const User = require('../models/users');

// import config folder to gain access to web token secret
const configFolder = require('../newConfig/keys')

// we'll be signing a token in multiple places
// create a reusable function that expects 1 argument, the user
 // this function signs the web token
const signToken = user => {
    // JWT.sign() accepts two arugments, the payload and secret, secret is used to encode the token.
    // the secret validates the token and makes sure it hasnt been manipulated

    // for the payload, has the following keys issuer, subject, issued at. expiration
    return JWT.sign({
      // issuer key is optional, for its value, put in the name of your site
      iss: 'mvp',
      // the subject key is required, it connects the token with the user that has signed up, in the db, choose something that is unique, for mongodb use object id
      sub: user._id,
      // issued at key is optional, gives the time of when the token was signed, use built in javascript function to get the time
      iat: new Date().getTime(), // current time
      // expiration key is optional, set when you want the token to expire
      exp: new Date().setDate(new Date().getDate()+ 10) // current time + 10 days
    }, configFolder.JWT_SECRET )
}

module.exports = {

  signUp: async (req, res, next) => {

    // instead of doing it this way, try object destructuring
    // const email = req.value.body.email;
    // const password = req.value.body.password;

    const { email, password, recipes } = req.value.body;

    /*
    const newUser = new User({
      email: String,
      password: String
    });
    */

      // this function needs the users email and password
      // const foundUser = await User.findOne({
      //   email: email
      // })

    const foundUser = await User.findOne({
      email: email
    })
    // if a users email already exists in the database, give forbidden code
    if(foundUser) {
      // need to return, so you can return out of the function instead of continuing to the rest of the code
      return res.status(403).json({
        error: "A user with that email already exists, enter a different email address"
      })
    }

    const newUser = new User({ email, password, recipes });
    await newUser.save();

    console.log('*****~~ signUp path, post request, THIS IS req.value.body~~***** =====> ', req.value.body)

    // generate the token
    const token = signToken(newUser);
    res.status(200).json({token: token })

  },
  signIn: async (req, res, next) => {
    // passport.js will do the validation

    // need to generate a token

    // passport will give access to the user "newUser" with the validateBody function used in routes/user.js
    // need to access the user property of the request object
    console.log('***** req.user ', req.user);
    const token = signToken(req.user)
    res.status(200).json({ token: token })
    // want to exchange existing user for a new token
    // use passport strategy to check whether the user exists, given the email and pw the user sends, if it does, then the controller function can generate a token
      // use a middleware called passport-local
    // needs hash, salt, verify that the pw is correct
    console.log('successful login');
  },
  secret: async (req, res, next) => {
    console.log('I got here!')
    res.json({secret: 'resource'});
    next();
  },
  delete: async (req, res, next) => {
    try {
      const foundUser = await User.findById(req.params.id)
      if(foundUser) {
        foundUser.remove()
        res.json({success: true})
      } else {
        res.json({
          error: "Cant delete"
        })
      }
    } catch(error) {
      next(error)
    }
    next();
  },
  recipes: (req, res, next) => {
    User.find({}, (err, data) => {})
    .limit(10)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.err(err)
    })
    next();
  }

}