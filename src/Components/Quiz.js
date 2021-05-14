import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Questions from './Questions'

const Quiz = () => {
  const [quizData, setQuizData] = useState()

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
        <Col>{quizData ? <Questions quizData={quizData} /> : ''}</Col>
      </Row>
    </Container>
  )
}

export default Quiz
