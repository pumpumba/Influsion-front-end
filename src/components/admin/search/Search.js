import React from 'react'
import SearchSuggestions from './SearchSuggestions'
import Feed from './InfluencerFeed'
import './../../../styles/admin/search.scss'


class Search extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <main className='search-content'>
                    <SearchSuggestions />
                    <div className='influencer-feed'>
                        <Feed/>
                </div>
                </main>
            </div>
        )
    }
}

export default Search
