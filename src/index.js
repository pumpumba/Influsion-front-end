import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import './styles/main.scss'

const title = 'inFlusion'

const Index = () => {
  return (
    <main>
      <AppBar position='static'>
        <Toolbar>
        <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <h1>inFlusion</h1>
        </Toolbar>
      </AppBar>
    </main>
  )
}

ReactDOM.render(<Index />, document.getElementById('index'))