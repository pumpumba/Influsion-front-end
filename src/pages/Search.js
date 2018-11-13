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
    }

    render() {
        return (
            <div>
                <Header />
                <main className='search-content'>
                    <form className='search-input-wrapper'>
                            <input
                                className='searchInput'
                                placeholder="Search"
                            />
                            <button >
                                <FontAwesomeIcon icon={'search'} />
                            </button>
                    </form>
                    <div className='info-text'>
                        Welcome to the world of searching and all we can give
                  <br />
                        <br />
                        Search for the username of your favorite influncer and experince the magic!
                </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Search