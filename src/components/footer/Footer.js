import React from 'react'
import FilterFooter from './FilterFooter'
import SubFooter from './SubFooter'


const Footer = (props) => {

  return (
      <footer>
        <FilterFooter updateFeedFilters={props.updateFeedFilters}/>
        <SubFooter/>
      </footer>
  )
}
export default Footer
