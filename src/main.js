import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

const name = 'world.'

class HelloMessage extends React.Component {
  render () {
    return <h1> Hello { this.props.name } </h1>
  }
}

ReactDOM.render(<HelloMessage name={name} key={2}></HelloMessage>,
  document.getElementById('app')
)
