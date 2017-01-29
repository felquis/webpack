import React from 'react'
import Header from './index.js'
import renderer from 'react-test-renderer'


it('should be ok', () => {
  const component = renderer.create(<Header title="Hello World" />)
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()

  tree.props.onClick()

  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
