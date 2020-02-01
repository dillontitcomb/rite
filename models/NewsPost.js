const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsPostSchema = new mongoose.Schema({
  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'artist'
    }
  ],
  editions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'edition'
    }
  ],
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
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = NewsPost = mongoose.model('newsPost', NewsPostSchema);
