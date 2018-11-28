import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import SearchSuggestions from './../components/search/SearchSuggestions'

class Search extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <main className='search-content'>
                    <SearchSuggestions />
                    <div className='info-text'>
                        Welcome to the world of searching and all we can give
                  <br />
                        <br />
                        Start typing the name of your favorite influencer and experience the magic!
                </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Search
