const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Question = new Schema({
    question: String,
    options: []
  },
  { collection: 'Questions' }
)

module.exports = mongoose.model('questions', Question)
