import React from 'react'
import PropTypes from 'prop-types'
import BlockedListComponent from './BlockedListComponent'
import {BACKEND_URL} from './../../constants'


class ListOfBlocked extends React.Component {
  constructor() {
    super()
    this.state = {
      response: []
    }

  }

  componentDidMount() {
      fetch(BACKEND_URL + 'db/list_all_excluded_influencers', {
        method: 'get',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },})
          .then(response => response.json())
          .then(response => this.setState({ response }))
  }


  render() {
      let blockContent = null
      if (this.state.response.length > 0) {
            let filteredContent = this.state.response
            blockContent = filteredContent.map(curContent => {
              return <BlockedListComponent
                    influencerName={curContent.influencername}
                    index={curContent.influencerid}
                    pic={curContent.piclink}
                   />
          })
      }

    return (
      <div className='blocked-box'>
        <div className="admin-block-content">
            <h1> Currently Blocked Influencers</h1>
            Theese Influencers are currently blocked by you.
        </div>
        <div className="influencer-list-header">
          <span>ID</span>
          <span>
            Influencer
          </span>
          <span>

          </span>
        </div>
        {blockContent}
      </div>


    );
  }
}

export default ListOfBlocked;
