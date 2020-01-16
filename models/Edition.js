const mongoose = require('mongoose');

const EditionSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  description: {
    type: Date,
    default: Date.now
  },
  files: {
    type: [String],
    required: true
  }
});

module.exports = User = mongoose.model('user', EditionSchema);
