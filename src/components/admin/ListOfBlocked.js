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

      fetch(BACKEND_URL + 'db/list_all_excluded_influencers', {})
          .then(response => response.json())
          .then(response => this.setState({ response }))

  }


  render() {

    let blockContent = null
    if (this.state.response.length > 0) {
        let filteredContent = this.state.data.filter(content => this.state.filters.includes(content.platform.toLowerCase()))
        blockContent = filteredContent.map(curContent => {
            return <BlockedListComponent
                      influencerName="Bieber" index="8"
                 />
        })
    }

    return (
      <div className='blocked-box'>
        <div className="admin-block-content">
            <h1> Currently Blocked Influencers</h1>
            Theese Influencers are currently blocked by you.
        </div>    
        {blockContent}
        <BlockedListComponent influencerName="Lady Gaga" index="8" />
        <BlockedListComponent influencerName="Jolina Olaussen" index="9"/>
        <BlockedListComponent influencerName="Jonas Olaussen" index="10" />
      </div>


    );
  }
}

export default ListOfBlocked;
