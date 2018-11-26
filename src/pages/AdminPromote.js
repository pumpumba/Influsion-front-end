import React from 'react'
import AdminFooter from './../components/admin/AdminFooter'
import NavLink from 'react-router-dom/NavLink';

class AdminPromote extends React.Component {
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
                  <h1>Promote Content</h1>
              </div>
            <AdminFooter />
          </div>
        )
    }
}

export default AdminPromote
