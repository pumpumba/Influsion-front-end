import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InfluencerComponent from './../components/search/InfluencerComponent'

const searchData = [
    {
        name: "Ida Warg",
        content: {
            id: 1,
            tweet_name: "Ida Warg",
            insta_name: "Ida Worg",
            youtube_name: "Idå Worg",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg"
        }
    }, {
      name: "Margeuix Dietz",
      content: {
          id: 24,
          tweet_name: "Maggan D",
          insta_name: "Arnold",
          youtube_name: "MD",
          tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg"
        }
    }
]

class Search extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          data: searchData
      }
      this.optionOnClick = this.optionOnClick.bind(this)
  }
  optionOnClick() {
      this.setState(prevState => ({
          options: !prevState.options
      }))
  }

    render() {

      let searchContent = null
      if (this.state.data.length > 0) {
      searchContent = searchData.map(curContent =>{
          return <InfluencerComponent
            hejhej
            id={this.state.data.id}
            name={this.state.data.name}
            userId={this.state.data.tweet_img_url}
          />
        })
      }

      return (
        <div>
            <Header />
            <main className='search-content'>
                <form>
                  <input className='searchInput'
                      placeholder="Search"
                  ></input>
                  <button onClick={this.searchGo} >
                    <FontAwesomeIcon icon={'search'} />
                  </button>

                </form>
                <div className='info-text'>
                  Welcome to the world of searching and all we can give
                  <br/>
                  <br/>
                  Search for the username of your favorite influncer and experince the magic!
                </div>
                <InfluencerComponent name={'Ida Warg'} tweet={'tweet Ida'} insta={'insta ida'} youtube={''} tweet_img_url={"https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg"} />
                <InfluencerComponent name={'Margeux Dietz'} tweet={''} insta={'Imaggan'} youtube={'YTm'} tweet_img_url={"https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg"} />
                </main>
            <Footer />
        </div>
      )
    }
}

export default Search
