import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import PopularComponent from './../components/popular/PopularComponent'

class Popular extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            filters: ['twitter', 'youtube', 'instagram']
        }
        this.updateFeedFilters = this.updateFeedFilters.bind(this)
    }

    updateFeedFilters(newFilters) {
        this.setState({ filters: newFilters })
    }

    componentDidMount() {
        fetch('http://40.127.101.155/db/get_latest_posts', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ top: '100', user_id: this.props.userId, platform: 'twitter' })
        }).then(data => data.json())
            .then(data => this.setState({ data }))
    }

    render() {
        let feedContent = null
        if (this.state.data.rowCount != null) {
            let filteredContent = this.state.data.rows.filter(content => this.state.filters.includes(content.platform.toLowerCase()))
            feedContent = filteredContent.map(curContent => {
                return <PopularComponent key={curContent.postid} data={curContent} />
            })
        }

        return (
            <div>
                <Header title={'Popular'} />
                <main className='popular-feed-content'>
                    {feedContent}
                </main>
                <Footer updateFeedFilters={this.updateFeedFilters} />
            </div>
        )
    }
}

export default Popular
