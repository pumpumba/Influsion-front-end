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
    fetch(BACKEND_URL + 'db/get_most_followed_users_clicked_promo?limit=5&ad_id=41', {
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => this.setState({ response }))
  }

  render() {
    let listContent = null
    if (this.state.response.rows !== undefined) {
      if (this.state.response.rows.length > 0) {
        listContent = this.state.response.rows.map((curContent, index) => {
          return <InfluencerListComponent
                    key={curContent.inflid}
                    index={index}
                    influencerName={curContent.influencername}
                    numberOfFollowers={curContent.nrfollowing}


                    onClick={() => this.handleClick(curContent.inflid)}
                  />
        })
      }
    }
    return (
      <div className='admin-box'>
        <h1 className="section-title"> Top 5 most followed influencers by ad</h1>
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
    );
  }
}

export default InfluencerList;
