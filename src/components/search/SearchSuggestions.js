import React from 'react'
import SearchSuggestionComponent from './SearchSuggestionComponent'
import {BACKEND_URL} from './../../constants'

class SearchSuggestions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            response: [],
            searchResults: []
        }
        this.onChange = this.onChange.bind(this)
        this.checkForInfluencer = this.checkForInfluencer.bind(this)
        this.inputText = React.createRef()
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
                    data={curContent}
                    key={curContent.inflid}
                />
            })
        }
        return (
            <form className='search-input-wrapper'>
                <input
                    onChange={(e) => this.onChange(e.target.value)}
                    className='searchInput'
                    placeholder='Search'
                    ref={(inputText) => { this.inputText = inputText }}
                />
                {feedContent}
            </form>
        )
    }
}

export default SearchSuggestions
