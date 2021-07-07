const mongoose = require('mongoose')
const BookSchema = new mongoose.Schema({
  name: String,
  authorName: String,
  price: Number,
  pages: Number,
})
module.exports = mongoose.model('Book', BookSchema)
