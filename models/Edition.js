const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EditionSchema = new mongoose.Schema({
  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'artist'
    }
  ],
  newsPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'newsPost'
    }
  ],
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  filePaths: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: false,
    default: -1
  },
  available: {
    type: Boolean,
    required: false,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Edition = mongoose.model('edition', EditionSchema);
