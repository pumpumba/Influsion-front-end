import React from 'react'

const Header = (props) => {
  return (
    <header id={props.title} className='page-header'>
      <h2>{props.title}</h2>
      <p>{props.copy}</p>
    </header>
  )
}

export default Header