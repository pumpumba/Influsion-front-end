import React from 'react'
import { Link } from 'react-router-dom'
import FilterFooter from './FilterFooter'
import SubFooter from './SubFooter'


const Footer = () => {
  return (
      <div className="footer">
        <FilterFooter/>
        <SubFooter/>
      </div>
  )
}
export default Footer
