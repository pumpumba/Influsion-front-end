import React from 'react'
import PropTypes from 'prop-types'
import PromoteAd from './../PromoteAd'
import BlockInfluencer from './../BlockInfluencer'
import ListOfBlocked from './../ListOfBlocked'
import Search from './../search/Search'

class PromoteTab extends React.Component {
  constructor(){
    super()
    this.state = {
      inflidClicked: 0
    }
  }

  render () {
    return(
    <div className="promote-tab-content">
      <div className='search-and-feed'>
          <Search inflid={this.state.inflidClicked}/>
      </div>
      <PromoteAd/>        
        <div className="block-content">
            <BlockInfluencer />
            <ListOfBlocked />
        </div>
    </div>
    )
  }
}

export default PromoteTab;
