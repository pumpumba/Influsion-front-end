import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import FeedComponent from './../components/feed/FeedComponent'
import { BACKEND_URL } from './../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Feed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            filters: ['twitter', 'youtube', 'instagram'],
            limit: 10,
            dummyTrigger: false
        }
        this.updateFeedFilters = this.updateFeedFilters.bind(this)
        this.filterContent = this.filterContent.bind(this)
        this.isBottom = this.isBottom.bind(this)
        this.trackScrolling = this.trackScrolling.bind(this)
        this.fetchFromApi = this.fetchFromApi.bind(this)
        this.filterContent = this.filterContent.bind(this)
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight + 100
    }

    trackScrolling() {
        const wrappedElement = document.getElementById('feed-content')
        if (this.isBottom(wrappedElement)) {

            this.setState(prevState => ({
                limit: prevState.limit + 10
            }), () => this.fetchFromApi())
        }
    }

    fetchFromApi() {
        fetch(BACKEND_URL + 'aggregate/content', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ assetType: ['all'], filterType: ['user'], filterValue: [this.props.userId, 1], limit: this.state.limit })
        }).then(data => data.json())
            .then(data => this.setState({ data }))
            .then(this.setState(prevState => ({ dummyTrigger: !prevState.dummyTrigger })))
    }


    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling)
        this.fetchFromApi()
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    updateFeedFilters(newFilters) {
        this.setState({ filters: newFilters })
    }

    filterContent(content) {
        if (content.showinfollowingfeed || content.promotedfollowing) {
            return true
        } else if (this.state.filters.includes(content.platform.toLowerCase())) {
            return true
        } else {
            return false
        }
    }

    render() {
        let feedContent = null
        if (this.state.data.length > 0) {
            let filteredContent = this.state.data.filter(content => this.filterContent(content))
            feedContent = filteredContent.map((curContent, index) => {
                return <FeedComponent
                    key={index}
                    data={curContent.platformcontent || curContent}
                    userId={this.props.userId}
                    platform={curContent.platform}
                    userFollowing={true}
                    inflid={this.props.inflid}
                    updateFeed={this.fetchFromApi}
                    dummyTrigger={this.state.dummyTrigger}
                    isPromoted={curContent.promotedfollowing}
                />
            })
        }

        if (feedContent != null) {
            return (
                <div className="mobile-page">
                    <Header />
                    <main id='feed-content'>
                        {feedContent}
                    </main>
                    <Footer updateFeedFilters={this.updateFeedFilters} showFilter='true' />
                </div>
            )
        } else {

            return (
                <div className="mobile-page">
                    <Header />
                    <main>
                        <p className="not-following">You do not follow any influencers yet. Press the <FontAwesomeIcon icon={'heart'} /> icon on an influencer in the popular feed to start following!</p>
                    </main>
                    <Footer updateFeedFilters={this.updateFeedFilters} showFilter='true' />
                </div>

            )
        }
    }
}

export default Feed
