import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Results from './Results'
import '../Sass/Questions.sass'

const Questions = ({ quizData }) => {
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  const [answer, setAnswer] = useState(null)
  const [completed, setCompleted] = useState(false)
  const [sumbitted, setSubmitted] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  const option1 = quizData[count]['options'][0]['text']
  const option2 = quizData[count]['options'][1]['text']
  const option3 = quizData[count]['options'][2]['text']
  const option4 = quizData[count]['options'][3]['text']

  const next = () => {
    if (answer === sumbitted) {
      setScore(score + 1)
    }
    if (answer !== null) {
      setCount(count + 1)
      setAnswer(null)
      setSubmitted(null)
      setShowAlert(false)
    } else {
      setShowAlert(true)
    }
  }

  const selection = (selectedAnswer) => {
    quizData[count]['options'].forEach((elem) => {
      if (elem.answer === true) {
        setAnswer(elem.text)
        setSubmitted(selectedAnswer)
      }
    })
  }

  return (
    <div>
      {completed ? (
        <Results score={score} />
      ) : (
        <div>
          <div className='dashed-border'>
            <h2>Question {count + 1}/10</h2>
          </div>
          <div className='questions-answers'>
            <h5>{quizData[count]['question']}</h5>
            {showAlert ? (
              <Alert show={true} onClose={() => setShowAlert(false)} variant='danger' closeLabel='Close Alert' dismissible fade='false'>
                Please make a selection!
              </Alert>
            ) : null}
            <ul>
              <li
                style={
                  option1 === answer && sumbitted === option1
                    ? { border: '1px solid green', backgroundColor: 'rgba(51, 170, 51, .1)' }
                    : option1 !== answer && sumbitted === option1
                    ? { backgroundColor: 'rgba(255, 0, 0, .3)' }
                    : option1 === answer && sumbitted !== option1
                    ? { boxShadow: '0 0 3px green inset' }
                    : { backgroundColor: 'transparent' }
                }
              >
                <button
                  className='option'
                  onClick={() => {
                    selection(option1)
                  }}
                >
                  A. {option1}
                </button>
              </li>
              <li
                style={
                  option2 === answer && sumbitted === option2
                    ? { border: '1px solid green', backgroundColor: 'rgba(51, 170, 51, .1)' }
                    : option2 !== answer && sumbitted === option2
                    ? { backgroundColor: 'rgba(255, 0, 0, .3)' }
                    : option2 === answer && sumbitted !== option2
                    ? { boxShadow: '0 0 3px green inset' }
                    : { backgroundColor: 'transparent' }
                }
              >
                <button
                  alt='submit button'
                  className='option'
                  onClick={() => {
                    selection(option2)
                  }}
                >
                  B. {option2}
                </button>
              </li>
              <li
                style={
                  option3 === answer && sumbitted === option3
                    ? { border: '1px solid green', backgroundColor: 'rgba(51, 170, 51, .1)' }
                    : option3 !== answer && sumbitted === option3
                    ? { backgroundColor: 'rgba(255, 0, 0, .3)' }
                    : option3 === answer && sumbitted !== option3
                    ? { boxShadow: '0 0 3px green inset' }
                    : { backgroundColor: 'transparent' }
                }
              >
                <button
                  alt='submit button'
                  className='option'
                  onClick={() => {
                    selection(option3)
                  }}
                >
                  C. {option3}
                </button>
              </li>
              <li
                style={
                  option4 === answer && sumbitted === option4
                    ? { border: '1px solid green', backgroundColor: 'rgba(51, 170, 51, .1)' }
                    : option4 !== answer && sumbitted === option4
                    ? { backgroundColor: 'rgba(255, 0, 0, .3)' }
                    : option4 === answer && sumbitted !== option4
                    ? { boxShadow: '0 0 3px green inset' }
                    : { backgroundColor: 'transparent' }
                }
              >
                <button
                  alt='submit button'
                  className='option'
                  onClick={() => {
                    selection(option4)
                  }}
                >
                  D. {option4}
                </button>
              </li>
            </ul>
            {count === 9 ? (
              <div>
                <button
                  id='nextBtn'
                  onClick={() => {
                    if (answer === sumbitted) {
                      setScore(score + 1)
                    }
                    setCompleted(true)
                  }}
                >
                  See Results
                </button>
                <br />
              </div>
            ) : (
              <div>
                <button
                  id='nextBtn'
                  onClick={() => {
                    next()
                  }}
                >
                  Next Question
                </button>
                <br />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Questions
