import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/Header'

import './styles/main.scss'

const title = 'inFlusion'

const Index = () => {
  return (
    <main>
      <Header title={title}/>
    </main>
  )
}

ReactDOM.render(<Index />, document.getElementById('index'))