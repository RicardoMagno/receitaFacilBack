const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String},
  email: {type: String, unique: [true, 'Email já criado'], required:[true,'Email necessario']},
  password: { type: String, required: [true, 'Senha rrequerida'], max:10,min:6},
});


module.exports = mongoose.model('User', userSchema);