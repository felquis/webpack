import React from 'react'
import { render } from 'react-dom'

import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header title="Hello World 3" />

      <p>This is my show!</p>
    </div>
  )
}

render(<App />, document.querySelector('#root'))
