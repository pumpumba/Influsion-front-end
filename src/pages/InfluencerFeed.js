import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import FeedComponent from './../components/feed/FeedComponent'
import {BACKEND_URL} from './../constants'

class InfluencerFeed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      filters: ['twitter', 'youtube', 'instagram']
    }
    this.updateFeedFilters = this.updateFeedFilters.bind(this)
  }


  componentDidMount() {
    fetch(BACKEND_URL + 'aggregate/content', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ assetType: ['all'], filterType: ['influencer'], filterValue: [this.props.match.params.influencerid, 1], limit: 100 })
    }).then(data => data.json())
      .then(data => this.setState({ data }))
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
          userFollowing={curContent.usrfollowinginfluencer}
        />
      })
    }

    return (
      <div className="mobile-page">
        <Header />
        <main>
          {feedContent}
        </main>
        <Footer updateFeedFilters={this.updateFeedFilters} showFilter='true'/>
      </div>
    )
  }
}

export default InfluencerFeed
