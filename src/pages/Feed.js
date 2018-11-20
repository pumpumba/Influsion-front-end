import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import FeedComponent from './../components/feed/FeedComponent'

class Feed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            filters: ['twitter', 'youtube', 'instagram']
        }
        this.updateFeedFilters = this.updateFeedFilters.bind(this)
    }

    componentDidMount() {
        fetch('http://40.127.101.155/aggregate/content', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ assetType: ['all'], filterType: ['user'], filterValue: 1, limit: 100 })
        }).then(data => data.json())
            .then(data => this.setState({ data }))

    }

    updateFeedFilters(newFilters) {
        this.setState({ filters: newFilters })
    }

    render() {
        let feedContent = null
        if (this.state.data.length > 0) {
            let filteredContent = this.state.data.filter(content => this.state.filters.includes(content.platform.toLowerCase()))
            feedContent = filteredContent.map(curContent => {
                return <FeedComponent
                    key={curContent.postid}
                    data={curContent.platformcontent}
                    userId={this.props.userId}
                    platform={curContent.platform}
                />
            })
        }

        if (feedContent != null) {
            return (
                <div>
                    <Header />
                    <main>
                        {feedContent}
                    </main>
                    <Footer updateFeedFilters={this.updateFeedFilters} />
                </div>
            )
        } else {
            return (
                <div>
                    <Header />
                    <main className='feed'>
                        <h2>Nothing here to show, please follow a influencer...</h2>
                    </main>
                    <Footer showFilter='true'/>
                </div>

            )
        }
    }
}

export default Feed
