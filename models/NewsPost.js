const mongoose = require('mongoose');

const NewsPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  }
});

module.exports = NewsPost = mongoose.model('newsPost', NewsPostSchema);
