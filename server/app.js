const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const User = require('./models/users');
const cors = require('cors');
const mongoose = require('mongoose');
const configFolder = require('./newConfig/keys');
mongoose.Promise = global.Promise;


const app = express();
app.use(cors());
app.use(express.static(`${__dirname}/../build`));
// mongoose.connect('mongodb://localhost/mvp', { useNewUrlParser: true });
mongoose.connect(configFolder.mongoURI, { useNewUrlParser: true });

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to the database');
});


// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
  // routes for signing up, signing in, secret (if user is authenticated)
app.use('/', require('./routes/users'));

app.get('/recipes',  (req, res, next) => {
    User.find({}, (err, data) => {})
    .limit(1)
    .sort({email: 1})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.err(err)
    })
    // next();
  }
)

app.get('/random',  (req, res) => {
  // get a count of all the recipes
  User.count().exec(function(err, count) {
    // get a random recipe
    var random = Math.floor(Math.random() * count)
    // query all the recipes but fetch one
    User.findOne().skip(random).limit(1).exec(
      function(err, result) {
        res.send([result])
      }
    )
  })
  }
)

// start the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;