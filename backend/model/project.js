const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let project = new Schema(
  {
    title: {type: String, required: true},
    content: {type: String, required: true},
  }
)

module.exports = mongoose.model('project', project)
