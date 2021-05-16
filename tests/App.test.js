import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/App'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  expect(div.querySelector('h1').textContent).toBe('World History Quiz')
  expect(div.querySelector('.home-para').textContent).toBe('How‘s your history trivia? Take this easy quiz and see how well you do!')
  expect(div.querySelector('#home-btn').textContent).toBe('START THE QUIZ')
})