const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    validate: value => typeof value === "string",
    unique: true
  },
  level: String,
  ingredients: {
    type: String,
    enum:{
      values: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
    }
  },
  cuisine: String,
  validate: value => typeof value === "string",
  dishType: {
    type: String,
    enum:{
      values: ["breakfast", "main_course", "soup", "snack", "drink", "dessert", "other"]
    }
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: {
    type: Number,
    min: [0, "Tenet is just a movie"]
  },
  creator: String,
  created: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
