const path = require('path')
const Book = require('../models/Book')

// @desc Get all Books
// @route Get /api/v1/books
// @access public
exports.getBooks = async (req, res, next) => {
  res.status(200).json({
    success: true,
  })
}
