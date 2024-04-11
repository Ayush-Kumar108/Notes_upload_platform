const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
