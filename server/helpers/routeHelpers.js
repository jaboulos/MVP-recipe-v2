// validate requests
// use joi middleware
  // declare a schema and validate each item in that schema
const Joi = require('joi');

module.exports = {
  // function to take the schema
  validateBody: (schema) => {
    // receive one of the below schemas and check to see if everything is correct
    // get access to the request and response
    return (req, res, next) => {
      // req, res, next get passed into this function when its called inside of routes/users.js
      // in routes/users.js, the functions use controllers/users.js as middleware, and thats how req, res, next get passed in
      // check to see if the data that got passed in, passes the validation
      const result = Joi.validate(req.body, schema);
      // if the result contains any errors
      if(result.error) {
        return res.status(400).json(result.error);
      }
      // check to see if req.value is missing.  If its missing, create it and set it equal to an empty object
      // if there are no errors, attach to the request object, a property called value. Attach to value, a property called body.
      if(!req.value) { req.value = {}; }
      // we want to have access to all validation fields by typing req.value.body instead of typing req.body
      req.value['body'] = result.value;
      // need to call next, otherwise this will block subsequent functions in the controllers
      next();
    }
  },
  // schema key to contain all the schemas needed for the project
  schemas: {
    // make a schema for authentication
    authSchema: Joi.object().keys({
      // specify all properties to validate
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      recipes: Joi.string()
    })

  }
}