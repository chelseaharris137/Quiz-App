import React from 'react'
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { shallow } from 'enzyme'
import App from '../src/App'
import Home from '../src/Components/Homepage'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  shallow(<App />)
})

it('renders homepage content', () => {
  const wrapper = shallow(<Home />)
  const header = <h1>World History Quiz</h1>
  const para = <p className='home-para'>How&lsquo;s your history trivia? Take this easy quiz and see how well you do!</p>
  const button = (
    <button className='global-button' id='home-btn'>
      START THE QUIZ
    </button>
  )
  expect(wrapper.contains(header)).toEqual(true)
  expect(wrapper.contains(para)).toEqual(true)
  expect(wrapper.contains(header)).toEqual(true)
})
