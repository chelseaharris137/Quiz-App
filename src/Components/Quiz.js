import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Quiz = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className='dashed-border'>
            <h2>Question [Number]/10</h2>
          </div>
          <div className='questions-answers'>
            <h5>This is the first Question?</h5>
            <ul>
              <li>A.</li>
              <li>B.</li>
              <li>C.</li>
              <li>D.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Quiz
