const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var recipeSchema = new Schema({
  tittle: String,
  content: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User' },
  isAnonimous: Boolean,
});

module.exports = mongoose.model('Recipe', recipeSchema);