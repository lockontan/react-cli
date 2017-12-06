import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

class HelloMessage extends React.Component {
  render () {
    return <h1>main: Hello world </h1>
  }
}

ReactDOM.render(<HelloMessage></HelloMessage>,
  document.getElementById('main')
)
