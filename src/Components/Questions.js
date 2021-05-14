import React, { useState } from 'react'
import Results from './Results'
import '../Sass/Questions.sass'

const Questions = ({ quizData }) => {
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  const [answer, setAnswer] = useState(null)
  const [completed, setCompleted] = useState(false)

  const option1 = quizData[count]['options'][0]['text']
  const option2 = quizData[count]['options'][1]['text']
  const option3 = quizData[count]['options'][2]['text']
  const option4 = quizData[count]['options'][3]['text']
//if the count is 11 show a score page
  const next = () => {
    if (answer !== null) {
      setCount(count + 1)
      setAnswer(null)
    } else {
      alert('please make a selection')
    }
  }

  const selection = (selectedAnswer) => {
    quizData[count]['options'].forEach((elem) => {
      if (elem.answer === true) {
        setAnswer(elem.text)
      }
    })
    if (selectedAnswer === answer) {
      setScore(score + 1)
    }
  }

  return (
    //use react rounter here
    //but you only want to go to the result if quiz taken
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
            <ul>
              <li
                style={
                  option1 === answer
                    ? { backgroundColor: 'green', opacity: '.4', color: '#000 !important' }
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
                  option2 === answer
                    ? { backgroundColor: 'green', opacity: '.4', color: '#000 !important' }
                    : { backgroundColor: 'transparent' }
                }
              >
                <button
                  className='option'
                  onClick={() => {
                    selection(option2)
                  }}
                >
                  B. {option2}
                </button>
              </li>
              <li style={option3 === answer ? { backgroundColor: 'green', opacity: '.4' } : { backgroundColor: 'transparent' }}>
                <button
                  className='option'
                  onClick={() => {
                    selection(option3)
                  }}
                >
                  C. {option3}
                </button>
              </li>
              <li style={option4 === answer ? { backgroundColor: 'green', opacity: '.4' } : { backgroundColor: 'transparent' }}>
                <button
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
                  id='resultsBtn'
                  onClick={() => {
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
