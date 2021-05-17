import React from 'react'
import { Link } from 'react-router-dom'
import '../Sass/Results.sass'

const Results = ({ score }) => {
  const result = (Number(score) / 10) * 100
  const excellent = 'Fantastic job! You scored in the top 10%. '
  const fair = 'Great job! You passed. Looking to improve your score? Click the button below to start again '
  const poor = 'Oh no...you failed. But thats ok! You can click the button below to try again. '

  return (
    <div>
      <div className='dashed-border'>
        <h2>Your Results</h2>
      </div>
      <div className='results'>
        <div className='score'>{result}%</div>
        <p>{result >= 90 ? excellent : result >= 70 && result < 90 ? fair : poor}Thanks for taking the quiz.</p>
        <Link to='/'>
          <button id='retakeBtn'>Retake Quiz</button>
        </Link>
      </div>
    </div>
  )
}

export default Results
