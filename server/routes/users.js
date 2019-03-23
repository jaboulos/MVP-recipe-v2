// this file handles the routes
const express = require('express');
const router = require('express-promise-router')();
// get access to passport
const passport = require('passport');
const passportConf = require('../passport');

// const router = express.Router;


/*
**express-promise-router**

automatically wraps functions in the "try catch" format for async and await functions
dont need to set it up like this, for example:

  module.exports = {
    signUp: async (req, res, next) => {
      // use "try" to try the function
      try {

      } catch(error) {
        next(error);
      }
    }
  }
*/

// need access to helpers/routeHelpers.js
const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/signup')
// before this request gets sent to the signup endpoint call validateBody, use the schemas.authSchema property

// what happens here is ...
  // client makes a post request to signup route
  // the body of the request contains data, express calls the validateBody function, if everything looks good, next() is called and continues on
  // to call usersController.signup in controllers/users.js
  // in controllers/users.js, the signup function calls req.value.body to gain access to all the body data
  .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin')
    .post(validateBody(schemas.authSchema), passportSignIn, UsersController.signIn);

router.route('/secret')
// passport.authenticate is a gatekeeper, that runs first before the next function, references passport.js file which makes sure the user exists
  .get(passportJWT, UsersController.secret);

router.route('/:id')
  .delete(UsersController.delete);

router.route('/recipes')
  .get(UsersController.recipes)


//export the router variable so its available elsewhere (app.js file)
module.exports = router;