import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import FeedComponent from './../components/feed/FeedComponent'

class InfluencerFeed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let influencer = this.props.match.params.influencer
    fetch('http://40.127.101.155/twitter/content', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ filterType: ['user'], assetType: ['tweet'], filterValue: influencer })
    }).then(data => data.json())
      .then(data => this.setState({ data }))
  }

  render() {
    let { data } = this.state
    let FeedContent = data.map(content => {
      return <FeedComponent key={content.tweet_created_at} data={content}/>
    })

    return (
      <div>
        <Header />
        <main>
          {FeedContent}
        </main>
        <Footer />
      </div>
    )
  }
}

export default InfluencerFeed
