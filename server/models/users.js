const mongoose = require('mongoose');
const onlineDb = require('../newConfig/keys');
mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is connected to the Users database');
});
//import bcryptjs for salt and hashing of the pw
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
  email: {
    type: String,
    // lowercase: true
  },
  password: {
    type: String,
  },
  recipesName: {
    type: String
  },
  recipeIngredients: {
    type: String
  },
  recipeTime: {
    type: String
  },
  recipeInstructions: {
    type: String
  },
  recipeImage: {
    type: String
  },
  comments: {
    type: String
  }
})


// need to run the salt + hash before the save function,
// .pre() lets you specify what function waits, what function gets run first
userSchema.pre('save', async function(next) {
  // reference the pw in the schema .... this.password
  try {
    // generate the salt
    const salt = await bcrypt.genSalt(10);
    // generate the hash
    const passwordHash = await bcrypt.hash(this.password, salt);
    console.log('**** check out the SALT: ', salt);
    console.log('**** Uh oh.. this password isnt hashed: ', this.password);
    console.log('**** Oh cool, this is the hashed version of that pw: ', passwordHash);

    // modify the users password so the hashed version is saved in the db
    this.password = passwordHash;
    // next lets the operation continue past the generating of the salt and hash
    next();
  } catch(error) {
    next(error);
  }
});

// compares password with hashed pw
// .methods allows you to create a new method on the userSchema object
userSchema.methods.isValidPassword = async function(notHashedPassword) {
  try {
    return await bcrypt.compare(notHashedPassword, this.password);
  } catch(error) {
    throw new Error(error);
  }
}

// create a model
const User = mongoose.model('user', userSchema)

// export the model
module.exports = User;