import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const Quiz = () => {
  const [quizData, setQuizData] = useState()
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(async () => {
    await axios.get('/questions').then((res) => {
      const result = []
      const questions = res.data.data
      questions.forEach((elem) => result.push(elem))
      setQuizData(result)
    })
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <div className='dashed-border'>
            <h2>Question [Number]/10</h2>
          </div>
          <div className='questions-answers'>
            <div className='questions-answers'>
              <h5>{JSON.stringify(quizData)}</h5>
              <ul>
                <li>A.</li>
                <li>B.</li>
                <li>C.</li>
                <li>D.</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Quiz
