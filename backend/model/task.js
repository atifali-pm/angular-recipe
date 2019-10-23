const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let task = new Schema(
  {
    title: {type: String, required: true},
    content: {type: String, required: true},
    _projectId: {
      type: mongoose.Types.ObjectId,
      required: true
    }
  },
)

module.exports = mongoose.model('task', task)
