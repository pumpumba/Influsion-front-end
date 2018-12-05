import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import SearchSuggestions from './../components/search/SearchSuggestions'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentlySearching: false
        }
        this.getCurrentlySearching = this.getCurrentlySearching.bind(this)
    }

    getCurrentlySearching(val) {
        this.setState({currentlySearching: val})
    }

    render() {
        let infoText1
        let infoText2
        if (!this.state.currentlySearching) {
            infoText1 = 'Welcome to the world of searching and all we can give'
            infoText2 = 'Start typing the name of your favorite influencer and experience the magic!'
        } else {
            infoText1, infoText2 = ''
        }

        return (
            <div>
                <Header />
                <main className='search-content'>
                    <SearchSuggestions sendCurrentlySearching={this.getCurrentlySearching}/>
                    <div className='info-text'>
                        {infoText1}
                        <br />
                        <br />
                        {infoText2}
                </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Search
