const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Question', QuestionSchema)