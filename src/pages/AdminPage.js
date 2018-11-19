import React from 'react'
import Popular from './Popular'
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area} from 'recharts'
import Statistics from './../components/admin/Statistics'
import CreateAd from './../components/admin/CreateAd'




class AdminPage extends React.Component {




  render () {
    return(
      <div className="admin-page-container">
        <header>
          <h1>
            Welcome to the AdminPage everybody!
          </h1>
        </header>
        <div className="admin-content">
          <div className="admin-left-content">
            <Statistics/>
          </div>
          <div className="admin-center-content">
            <CreateAd/>
          </div>
          <div className="admin-right-content">
          </div>
        </div>
     </div>

    )
  }
}

export default AdminPage
