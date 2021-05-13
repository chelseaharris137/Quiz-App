const express = require('express')
const router = express.Router()
const QuestionCtrl = require('../controller/questionsctrl')

// get all quiz questions
router.get('/questions', QuestionCtrl.getQuestions)

module.exports = router