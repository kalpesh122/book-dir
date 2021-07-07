// Loading packages
const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// Loading env vars
dotenv.config({ path: './config/config.env' })

// creating express server
const app = express()

// Loading routes
const book = require('./routes/book')

// Mounting Routes
app.use('/api/v1/books', book)

// Port Number
const PORT = process.env.PORT || 3000

// listening at port 5000
app.listen(
  PORT,
  console.log(
    `Server running In ${process.env.NODE_ENV} a port ${PORT} `.yellow.inverse,
  ),
)
