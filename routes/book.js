const express = require('express')
const { getBooks } = require('../controllers/book')
const router = express.Router()
const Book = require('../models/Book')

router.route('/').get(getBooks)

module.exports = router
