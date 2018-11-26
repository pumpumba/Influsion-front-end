import React from 'react'
import AdminFooter from './../components/admin/AdminFooter'
import NavLink from 'react-router-dom/NavLink'
import BlockSuggestions from './../components/admin/BlockSuggestions'

class AdminBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

    render() {
        return (
          <div className="admin-page-container">
              <header>
                  <h1>
                      inFlusion: Admin
                  </h1>
              </header>

              <div className="admin-block-content">
                  <h1>Block Influencer</h1>
                  <h2> Enter the name of the influencer you whish to block. </h2>
              </div>
                  <div className='block-content'>
                      <BlockSuggestions />
                  </div>
            <AdminFooter />
          </div>
        )
    }
}

export default AdminBlock
