import React from 'react'
import PropTypes from 'prop-types'
import PromoteAd from './../PromoteAd'
import BlockInfluencer from './../BlockInfluencer'
import ListOfBlocked from './../ListOfBlocked'

class PromoteTab extends React.Component {
  render () {
    return(
    <div className="promote-tab-content">
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
