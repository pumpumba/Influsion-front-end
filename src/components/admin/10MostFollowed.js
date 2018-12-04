import React from 'react'
import PropTypes from 'prop-types'
import InfluencerListComponent from './InfluencerListComponent'
import {BACKEND_URL} from './../../constants'

class InfluencerList extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: Array(9).fill(false),
      lastActive: null,
      response: [],
    }
    this.setInflId = this.setInflId.bind(this)

  }

  setInflId(influencer) {
    this.props.sendId(influencer)
}

  handleClick(i) {
    this.setInflId(i)
  }

  componentDidMount() {
    fetch(BACKEND_URL + 'db/get_most_followed_influencers?limit=10', {})
        .then(response => response.json())
        .then(response => this.setState({ response }))
  }

  render() {
    let listContent = null
    if (this.state.response !== undefined) {
      if (this.state.response.length > 0) {
        listContent = this.state.response.map((curContent, index) => {
          return <InfluencerListComponent
                    key={curContent.influencerid}
                    index={index}
                    influencerName={curContent.influencername}
                    numberOfFollowers={curContent.nrfollowing}
                    imgs={curContent.imgs}
                    onClick={() => this.handleClick(curContent.influencerid)}
                  />
        })
      }
    }
    return (
      <div className="ten-most-followed">
        <div className='admin-box'>
          <h1 className="section-title"> The top 10 most followed influencers</h1>
          <div className="influencer-list-header">
            <span>Rank</span>
            <span></span>
            <span>
              Influencer
            </span>
            <span>
              Followers
            </span>
          </div>
          {listContent}
        </div>
      </div>
    );
  }
}

export default InfluencerList;
