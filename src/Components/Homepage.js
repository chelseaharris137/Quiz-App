import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Sass/Home.sass'

const Home = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <h1>World History Quiz</h1>
          <p className='home-para'>How&lsquo;s your history trivia? Take this easy quiz and see how well you do!</p>
          <Link to='/quiz'>
            <button className='global-button'>START THE QUIZ</button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
