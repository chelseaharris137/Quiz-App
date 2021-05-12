import React from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Home from './Components/Homepage'
import Quiz from './Components/Quiz'
import './Sass/App.sass'

const App = () => {
  return (
    <Router>
      <Container style={{ backgroundColor: '#252c4a', height: '100vh' }} fluid>
        <Row className='justify-content-md-center align-items-center'>
          <Col className='mt-5'>
            <Switch history={useHistory}>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/quiz'>
                <Quiz />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App
