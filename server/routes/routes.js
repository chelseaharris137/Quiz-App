const express = require('express')
const router = express.Router()
const Question = require('../model/Questions.js') 

// get all quiz questions
router.get('/questions', (req, res) => {
    try {
        const questions = Question.find()
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

module.exports = router