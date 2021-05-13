const Question = require('../model/questions.js')


getQuestions = async (req, res) => {
  console.log('hello')
    // await Question.find({}, (err, questions) => {console.log(questions)})
    //     if (err) {
    //         return res.status(400).json({ success: false, error: err })
    //     }
    //     if (!questions.length) {
    //         return res
    //             .status(404)
    //             .json({ success: false, error: `Question not found` })
    //     }
    //   return res.status(200).json({ success: true, data: questions })
    // }).catch(err => console.log(err))
}


module.exports = { getQuestions }
