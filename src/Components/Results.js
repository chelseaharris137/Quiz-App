import React from 'react'
import { Link } from 'react-router-dom'
import '../Sass/Results.sass'

const Results = ({ score }) => {
  // const result = (Number(score) / 10) * 100
  return (
    <div>
      <div className='dashed-border'>
        <h2>Your Results</h2>
      </div>
      <div className='results'>
        <h5>{score}</h5>
        <p>Nice job! Thanks for taking the quiz. Feel free to try it again.</p>
        <Link to='/'>
          <button id='retakeBtn'>Retake Quiz</button>
        </Link>
      </div>
    </div>
  )
}

export default Results