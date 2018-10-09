import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import PopularComponent from './../components/popular/PopularComponent'

class Popular extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://40.127.101.155/api/twitter?request_type=popular')
            .then(response => response.json())
            .then(data => this.setState({ data }))
    }

    render() {
        let {data} = this.state

        let FeedContent = data.map(influencer => {
            return <PopularComponent key={influencer.user_name} data={influencer} />
        })

        return (
            <main>
                <Header title={'Popular'} />
                <div className='popular-feed-content'>
                    {FeedContent}
                </div>
                <Footer />
            </main>
        )
    }
}

export default Popular
