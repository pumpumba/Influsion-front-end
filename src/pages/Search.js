import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InfluencerComponent from './../components/search/InfluencerComponent'
import SearchSuggestions from './../components/search/SearchSuggestions'

class Search extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        
      }
      this.optionOnClick = this.optionOnClick.bind(this)
  }
  optionOnClick() {
      this.setState(prevState => ({
          options: !prevState.options
      }))
  }

    render() {
      return (
        <div>
            <Header />
            <main className='search-content'>
                    <SearchSuggestions></SearchSuggestions>
                <div className='info-text'>
                  Welcome to the world of searching and all we can give
                  <br/>
                  <br/>
                  Start typing the name of your favorite influncer and experince the magic!
                </div>
                </main>
            <Footer />
        </div>
      )
    }
}

export default Search
