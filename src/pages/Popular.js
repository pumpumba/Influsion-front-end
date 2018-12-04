import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import PopularComponent from './../components/popular/PopularComponent'
import { BACKEND_URL } from '../constants'

class Popular extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            filters: ['twitter', 'youtube', 'instagram'],
            limit: 10
        }
        this.updateFeedFilters = this.updateFeedFilters.bind(this)
        this.isBottom = this.isBottom.bind(this)
        this.trackScrolling = this.trackScrolling.bind(this)
        this.fetchFromApi = this.fetchFromApi.bind(this)
        this.filterContent = this.filterContent.bind(this)
    }

    updateFeedFilters(newFilters) {
        this.setState({ filters: newFilters })
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight - 100
    }

    trackScrolling() {
        const wrappedElement = document.getElementById('popular-feed-content')
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
            body: JSON.stringify({ assetType: ['all'], filterType: ['popular'], filterValue: [this.props.userId, 1], limit: this.state.limit })
        }).then(data => data.json())
            .then(data => this.setState({ data }))
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling)
        this.fetchFromApi()
    }

    filterContent(content){
        if(content.showinpopularfeed || content.promotedpopular){
            return true
        }else if(this.state.filters.includes(content.platform.toLowerCase())){
            return true
        }else{
            return false
        }
    }

    render() {
        let feedContent = null
        if (this.state.data != null) {
            let filteredContent = this.state.data.filter(content =>
                this.filterContent(content)
            )
            feedContent = filteredContent.map((curContent,index) => {
                return <PopularComponent
                    key={index}
                    data={curContent.platformcontent || curContent}
                    userId={this.props.userId}
                    userFollowing={curContent.usrfollowinginfluencer}
                />
            })
          }


        return (
            <div className="mobile-page">
                <Header title={'Popular'} />
                <main className='popular-feed-content' id='popular-feed-content'>
                    {feedContent}
                </main>
                <Footer updateFeedFilters={this.updateFeedFilters} showFilter='true' />
            </div>
        )
    }
}

export default Popular
