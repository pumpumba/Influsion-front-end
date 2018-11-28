import React from 'react'
import PropTypes from 'prop-types'
import BlockedListComponent from './BlockedListComponent'


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
    if (this.state.data.length > 0) {
        let filteredContent = this.state.data.filter(content => this.state.filters.includes(content.platform.toLowerCase()))
        blockContent = filteredContent.map(curContent => {
            return <BlockedListComponent
                influencerName={curContent.postid}
                index={curContent.id}
                } />
        })
    }

    return (
      <div className='blocked-box'>
        <h1 className="section-title"> Currently Blocked Influencers</h1>
        {blockContent}
        <BlockedListComponent influencerName="Lady Gaga" index="8" />
        <BlockedListComponent influencerName="Jolina Olaussen" index="9"/>
        <BlockedListComponent influencerName="Jonas Olaussen" index="10" />
      </div>


    );
  }
}

export default ListOfBlocked;
