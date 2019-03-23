const User = require('./server/models/users');
const faker = require('faker');

// set this to en_US so faker generated data is in english
faker.locale = 'en_US';

// stack overflow recommendation, node property
require('events').EventEmitter.prototype._maxListeners = 1000;
// let count = 1;

// use async and await to load large numbers of data into db
// use 'insertMany()' method instead of 'create' for faster load times

async function seedUser(outerLoop, innerLoop) {
  for(let i = 0; i < outerLoop; i++) {
    // need to insert an array of objects into the db
    let arr = [];
    for(let j = 0; j < innerLoop; j++) {
      let userObject = {
        email: faker.internet.email(),
        password: faker.lorem.word(),
        recipesName: faker.lorem.word(),
        recipeIngredients: faker.lorem.words(),
        recipeTime: faker.random.number(),
        recipeInstructions: faker.lorem.sentences(),
        recipeImage: faker.image.food()
      }
      arr.push(userObject);
    }
    // console.log('Seed successful', count++);
    await User.insertMany(arr);
  }
}

seedUser(10, 100);