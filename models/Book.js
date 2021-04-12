const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  authors: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = Book = mongoose.model('book', BookSchema);
