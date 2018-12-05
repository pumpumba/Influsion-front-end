import React from 'react'
import Popular from './Popular'
import StartTab from './../components/admin/tabs/StartTab'
import PromoteTab from './../components/admin/tabs/PromoteTab'
import AdTab from './../components/admin/tabs/AdTab'

class AdminPageNew extends React.Component {
  constructor() {
    super()
    this.state = {
      tabVariable: "start",

    }
    this.clickOnTab=this.clickOnTab.bind(this)
    this.logOut = this.logOut.bind(this)
  }
  clickOnTab(tab){
    this.setState({tabVariable: tab})
  }
  logOut() {
    this.props.updateAdminId(0)
  }

  render() {
    let tabContent
    let startTabClasses ="start-tab"
    let promoteTabClasses ="promote-tab"
    let adTabClasses ="ad-tab"

    if (this.state.tabVariable == 'start') {
      tabContent = <StartTab/>
      startTabClasses="start-tab tab-active"
    } else if(this.state.tabVariable == 'promote'){
      tabContent = <PromoteTab/>
      promoteTabClasses = "promote-tab tab-active"
    } else if(this.state.tabVariable == 'ad'){
      tabContent = <AdTab/>
      adTabClasses = "ad-tab tab-active"
    }

    return (
      <div className="admin-page-container">
        <header>
          <div className="admin-title">
              inFlusion: Admin
            <button onClick={this.logOut} className='admin-log-out'>Log out</button>
          </div>
        </header>
        <div className="tab-header">
          <h2 className={startTabClasses} onClick={() => this.clickOnTab("start")}>Start page</h2>
          <div className={promoteTabClasses} onClick={() => this.clickOnTab("promote")}><h2>Promote page</h2></div>
          <h2 className={adTabClasses} onClick={() => this.clickOnTab("ad")}>Ad page</h2>
        </div>
        <div className="admin-content">
          {tabContent}
        </div>
      </div>
    )
  }

}

export default AdminPageNew;
