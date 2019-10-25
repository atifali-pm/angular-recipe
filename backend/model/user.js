const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

// Define collection and schema
let user = new Schema(
  {
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
  }
)

user.plugin(uniqueValidator);

module.exports = mongoose.model('User', user)
