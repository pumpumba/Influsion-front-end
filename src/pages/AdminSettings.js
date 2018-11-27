import React from 'react'
import AdminFooter from './../components/admin/AdminFooter'
import NavLink from 'react-router-dom/NavLink';

class AdminSettings extends React.Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    this.props.updateAdminId(0)
    window.location.href = '/admin'
  }

    render() {
        return (
          <div className="admin-page-container">
              <header>
                  <h1>
                      inFlusion: Admin
                  </h1>
              </header>

              <div className="admin-logout-content">
                  <h1>Settings</h1>
                  <a href='/admin-promote' className='white-button'>Promote Post</a>
                  <a href='/admin-create' className='white-button'>Create New Post</a>
                  <a href='/admin-block' className='white-button'>Block Influencer</a>
                  <button onClick={this.logOut}  className='white-button'>Log out</button>

              </div>
            <AdminFooter />
          </div>
        )
    }
}

export default AdminSettings
