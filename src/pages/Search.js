import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Search extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          options: false,
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
            </main>
            <Footer />
        </div>
      )
    }
}

export default Search
