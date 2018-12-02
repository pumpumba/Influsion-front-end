import React from 'react'
import SearchSuggestions from './SearchSuggestions'
import Feed from './InfluencerFeed'
import './../../../styles/admin/search.scss'


class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inflid: 0
        }
        this.getId = this.getId.bind(this)
    }

    getId(val){
        this.setState({inflid: val})
    }

    render() {
        return (
            <div>
                <main className='admin-search-content'>
                    <SearchSuggestions inflid={this.state.inflid} sendId={this.getId}/>
                    <div className='admin-influencer-feed'>
                        <Feed inflid={this.state.inflid}/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Search
