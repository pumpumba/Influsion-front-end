import React from 'react'
import SearchSuggestionComponent from './SearchSuggestionComponent'
import {BACKEND_URL} from './../../../constants'

class SearchSuggestions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            response: [],
            searchResults: [],
            noInput: ''
        }
        this.onChange = this.onChange.bind(this)
        this.checkForInfluencer = this.checkForInfluencer.bind(this)
        this.getId = this.getId.bind(this)
        this.getInfluencerClicked = this.getInfluencerClicked.bind(this)
    }

    
    checkForInfluencer(searchString) {

        let influData = this.state.response
        let searchResults = []
        let found = false

        for (let i = 0; i < influData.length; i++) {
            if (influData[i]['influencername'].toLowerCase().startsWith(searchString.toLowerCase())) {
                searchResults.push(influData[i])
                found = true
            }

            if (!found) {
                for (let j = 0; j < influData[i]['pfaccs']['platformaccounts'].length; j++) {
                    if (influData[i]['pfaccs']['platformaccounts'][j]['actname'].toLowerCase().startsWith(searchString.toLowerCase())) {
                        searchResults.push(influData[i])
                        found = false
                        break
                    }
                }
            }
        }
        if (searchString === '')
            return []

        if (searchResults.length > 0)
            return searchResults
        else {
            let noResult = []
            noResult.push(
            {
                'influencername': 'No matching influencers',
                'realname': 'No matching influencers',
                'inflid': 'search',
                'pfaccs': {
                    'platformaccounts': [{
                        'actname': '',
                        'platform': ''
                    }]
                },
                'usrfollowinginfluencer': false
            })
            return noResult
        }
    }
    onChange(searchString) {
        this.setState({ searchResults: this.checkForInfluencer(searchString) })
        this.setState({ noInput: searchString})
    }

    getId(val) {
        this.props.sendId(val)
    }

    getInfluencerClicked(val) {
        if (val) {
            this.setState({searchResults: []})
            this.setState({noInput: ''})
        }
    }

    componentDidMount() {

        fetch(BACKEND_URL + 'db/get_for_autosearch?user_id=1', {})
            .then(response => response.json())
            .then(response => this.setState({ response }))

    }

    render() {
        let feedContent = null
        if (this.state.searchResults.length > 0) {
            let influencerName = []
            for (let i = 0; i < this.state.searchResults.length; i++) {
                influencerName.push(this.state.searchResults[i])
            }
            feedContent = influencerName.map(curContent => {
                return <SearchSuggestionComponent
                    inflid={this.props.inflid}
                    data={curContent}
                    key={curContent.inflid}
                    sendId={this.getId}
                    sendInfluencerClicked={this.getInfluencerClicked}
                    />
            })
            
        }
        return (
            <form className='admin-search-input-wrapper'>
                <input
                    onChange={(e) => this.onChange(e.target.value)}
                    className='searchInput'
                    placeholder='Search'
                    value={this.state.noInput}
                />
                {feedContent}
            </form>
        )
    }
}

export default SearchSuggestions