import React from 'react'
import FeedComponent from './FeedComponent'
import {BACKEND_URL} from './../../../constants'

class InfluencerFeed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      filters: ['twitter', 'youtube', 'instagram'],
      influencerid: this.props.inflid
    }
    this.updateFeedFilters = this.updateFeedFilters.bind(this)
    this.mountAndUpdate = this.mountAndUpdate.bind(this)
  }

  mountAndUpdate() {
    fetch(BACKEND_URL + 'aggregate/content', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ assetType: ['all'], filterType: ['influencer'], filterValue: [this.props.inflid, 1], limit: 100 })
    }).then(data => data.json())
      .then(data => this.setState({ data }))
  }
  
  componentDidMount() {
    this.mountAndUpdate()
    }

  componentDidUpdate() {
      if (this.state.influencerid !== this.props.inflid) {
        this.setState({influencerid: this.props.inflid})
        this.mountAndUpdate()
      }
    } 

  updateFeedFilters(newFilters) {
    this.setState({ filters: newFilters })
  }

  render() {
    let feedContent = null
    if (this.state.data.length > 0) {
      let filteredContent = this.state.data.filter(content => this.state.filters.includes(content.platform.toLowerCase()))
      feedContent = filteredContent.map(curContent => {
        return <FeedComponent
          key={curContent.postid}
          data={curContent.platformcontent}
          userId={this.props.userId}
        />
      })
    }

    return (
      <div className="mobile-page">
        <main>
          {feedContent}
        </main>
      </div>
    )
  }
}

export default InfluencerFeed
