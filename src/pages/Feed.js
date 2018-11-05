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

  followingUser(u) {

    fetch('http://40.127.101.155/db/get_follow_list_accounts', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(*input USER_ID* )
    })
    .then(data => data.json())
  }

  componentDidMount() {

    fetch('http://40.127.101.155/twitter/content', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ filterType: ['user'], assetType: ['tweet'], filterValue: '*GET_FOLLOW_LIST_ACCOUNTS*/data'?' })
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
        <Header title={'My Feed'} />
        <main>
          {FeedContent}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Feed
