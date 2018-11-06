import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import FeedComponent from './../components/feed/FeedComponent'
import YoutubeFeedComponent from './../components/feed/YoutubeFeedComponent'
import './../styles/feed/YoutubeFeedComponent.scss'

class Feed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      filters: ['twitter', 'youtube', 'instagram'],
      ytData:{
        platform: "Youtube",
        url: "https://www.youtube.com/embed/tgbNymZ7vqY",
        likes: 1456,
        dislikes: 56,
        user: "Pekka rinne pinne"
      }
    }

    this.updateFeedFilters = this.updateFeedFilters.bind(this)
  }



  componentDidMount() {


    fetch('http://40.127.101.155/db/get_followed_infl_posts', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ filterType: ['user'], assetType: ['tweet'], filterValue: 'beyonce' })
    }).then(data => data.json())
      .then(data => this.setState({ data }))
  }

  updateFeedFilters(newFilters) {
    this.setState({filters: newFilters})
}

  render() {

    let filteredContent = this.state.data.filter(content => this.state.filters.includes(content.platform.toLowerCase()))
    let FeedContent = filteredContent.map(content => {
      return <FeedComponent key={content.tweet_created_at} data={content}/>
    })

    return (
      <div>
        <Header title={'My Feed'} />
        <main>
        <YoutubeFeedComponent data={this.state.ytData} user_name="Jesper Hedlund"  />
         {FeedContent}
        </main>
        <Footer updateFeedFilters={this.updateFeedFilters} />
      </div>
    )
  }
}

export default Feed
