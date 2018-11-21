import React from 'react'
import SearchSuggestionComponent from './SearchSuggestionComponent'

class SearchSuggestions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            response: [],
            searchResults: []
        }
        this.onChange = this.onChange.bind(this)
        this.checkForInfluencer = this.checkForInfluencer.bind(this)
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
        if (searchString === "")
            return []

        return searchResults
    }
    onChange(searchString) {
        this.setState({ searchResults: this.checkForInfluencer(searchString) })
    }

    componentDidMount() {

        fetch('http://40.127.101.155/db/get_for_autosearch?user_id=1', {})
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
                    placeholder="Search"
                />
                {feedContent}
            </form>
        )
    }
}

export default SearchSuggestions
