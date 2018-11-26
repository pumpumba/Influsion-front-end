import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminFooter = (props) => {

    return (

      <div className="admin-footer">
          <NavLink exact to='/admin'>
              <FontAwesomeIcon icon={'heart'} />
          </NavLink>
          <NavLink exact to='/admin-settings'>
              <FontAwesomeIcon icon={'cogs'} />
          </NavLink>
          <NavLink exact to='/admin-search'>
              <FontAwesomeIcon icon={'search'} />
          </NavLink>
      </div>
  )
}
export default AdminFooter
