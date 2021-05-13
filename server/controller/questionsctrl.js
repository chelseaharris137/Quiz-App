const Question = require('../model/questions')

// eslint-disable-next-line no-undef
getQuestions = async (req, res) => {
  await Question.find({}, (err, questions) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!questions.length) {
      return res.status(404).json({ success: false, error: `Question not found` })
    }
    return res.status(200).json({ success: true, data: questions })
  }).catch((err) => console.log(err))
}

// eslint-disable-next-line no-undef
module.exports = { getQuestions }
