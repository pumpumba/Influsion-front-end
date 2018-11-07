import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import PopularComponent from './../components/popular/PopularComponent'
import PopularInstagramComponent from './../components/popular/PopularInstagramComponent'

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
        fetch('http://40.127.101.155/aggregate/content', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ assetType: ['all'], filterType: ['popular'], filterValue: [this.props.userId], limit: 100 })
        }).then(data => data.json())
            .then(data => this.setState({ data }))
    }

    render() {

        let feedContent = null
        if (this.state.data.length > 0) {
            let filteredContent = this.state.data.filter(content => this.state.filters.includes(content.platform.toLowerCase()))
            feedContent = filteredContent.map(curContent => {
              if(curContent.platform=="twitter"){
                return <PopularComponent key={curContent.postid} data={curContent} />
              }else{
                return <PopularInstagramComponent key={curContent.postid} data={curContent}/>
              }
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
