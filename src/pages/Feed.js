import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import FeedComponent from './../components/feed/FeedComponent'

class Feed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://40.127.101.155/db/get_followed_infl_posts', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userid: this.props.userID})
    }).then(data => data.json())
      .then(data => this.setState({ data }))
  }

  updateFeedFilters(newFilters) {
    this.setState({ filters: newFilters })
  }

  render() {
    console.log("heeeeeeeej"+ this.props.userId);
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

export default Feed
