import React from 'react'
import AdminFooter from './../components/admin/AdminFooter'
import NavLink from 'react-router-dom/NavLink';
import PromoteAd from './../components/admin/PromoteAd'

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
                  <PromoteAd />
              </div>
            <AdminFooter />
          </div>
        )
    }
}

export default AdminPromote
