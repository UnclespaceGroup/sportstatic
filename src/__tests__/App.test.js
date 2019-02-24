import React from 'react'
import App from '../App'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('@App', () => {
  let wrapper
  it('correct render', () => {
    wrapper = shallow(
      <App />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
