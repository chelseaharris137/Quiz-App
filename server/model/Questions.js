const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Question = new Schema({
    question: String,
    options: [
        {
            text: String,
            answer: Boolean
        },
        {
            text: String,
            answer: Boolean
        },
        {
            text: String,
            answer: Boolean
        },
        {
            text: String,
            answer: Boolean
        },
    ]
})

module.exports = mongoose.model('questions', Question)