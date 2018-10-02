import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from '@material-ui/core/AppBar'

import './styles/main.scss'
import { Toolbar } from '@material-ui/core';

const title = 'inFlusion'

const Index = () => {
  return (
    <main>
      <AppBar position='static'>
        <Toolbar>
          <h1>inFlusion</h1>
        </Toolbar>
      </AppBar>
    </main>
  )
}

ReactDOM.render(<Index />, document.getElementById('index'))