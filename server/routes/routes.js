const express = require('express')
const router = express.Router()
const QuestionCtrl = require('../controller/questionsctrl')

// get all quiz questions
router.get('/', QuestionCtrl.getQuestions)

// eslint-disable-next-line prettier/prettier
module.exports = router