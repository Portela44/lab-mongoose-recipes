const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })

  //Iteration 2
  .then(() => {
    const myRecipe = Recipe.create({
      title: "Gazpacho",
      level: "Easy Peasy",
      ingredients: ["tomato","cucumber","bread"],
      cuisine: "Spanish",
      dishType: "other",
      duration: 5,
      creator: "god"
    })
    return myRecipe
  })

  //Iteration 3
  .then(() => {
    return Recipe.insertMany(data)
  })

  //Iteration 4
  .then(() => {
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"},{duration: 100}, {new: true})
  })
  .then(() => {
    console.log("rigatone is longer now!")
  })

  //Iteration 5
  .then(() => {
    return Recipe.deleteOne({title: "Carrot Cake"})
  })
  .then(() => {
    console.log("carrot cake is no longer among us")
  })

  .then(() => {
    mongoose.disconnect();
  })
  
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
