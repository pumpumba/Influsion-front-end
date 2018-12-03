import React from 'react'
import Popular from './Popular'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts'
import Statistics from './../components/admin/Statistics'
import CreateAd from './../components/admin/CreateAd'
import InfluencerList from './../components/admin/InfluencerList'
import ListOfAds from './../components/admin/ListOfAds'
import StatisticsPlatform from './../components/admin/StatisticsPlatform'
import AdminFooter from './../components/admin/AdminFooter'
import MostClicked from './../components/admin/10MostClicked'
import MostFollowed from './../components/admin/10MostFollowed'
import Search from './../components/admin/search/Search'
import './../styles/admin/most-clicked-followed-search.scss'
import BlockInfluencer from './../components/admin/BlockInfluencer'
import ListOfBlocked from './../components/admin/ListOfBlocked'


class AdminPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isPageStatistics: true,
            inflidClicked: 0,
        }
        this.rightClickContent = this.rightClickContent.bind(this)
        this.logOut = this.logOut.bind(this)
        this.getId = this.getId.bind(this)
    }

    getId(val){
        this.setState({inflidClicked: val})
    }

    logOut() {
      this.props.updateAdminId(0)
    }

    rightClickContent() {

        const p = !this.state.isPageStatistics
        this.setState({ isPageStatistics: p })
    }

    render() {

        let isStatisticsPlatform = this.state.isPageStatistics
        let stats
        let title
        if (isStatisticsPlatform) {
            title = "Page Statistics"
            stats = <StatisticsPlatform title={title} />
        } else {
            title = "Influencer Statistics"
            stats = <Statistics title={title} />
        }
        return (
            <div className="admin-page-container">
                <header>
                    <div className="admin-title">
                        inFlusion: Admin
                        <button onClick={this.logOut}  className='admin-log-out'>Log out</button>
                    </div>
                </header>
                <div className="admin-content">
                    <div className="admin-left-content">
                        {stats}
                    </div>
                    <div className="admin-center-content">
                        <InfluencerList />
                    </div>
                    <div className="admin-right-content">
                        <ListOfAds />
                        <CreateAd />
                    </div>
                </div>
                <div className='most-clicked-and-search'>
                    <div className='10-most-clicked'>
                        <MostClicked sendId={this.getId}/>  
                    </div>
                    <div className='10-most-followed'>
                        <MostFollowed sendId={this.getId}/>
                    </div>
                    <div className='search-and-feed'>
                        <Search inflid={this.state.inflidClicked}/>
                    </div>
                    </div>
                                    
                <div className="block-content">
                    <BlockInfluencer />
                    <ListOfBlocked />
                </div>
                <div className="admin-content">
                    <div className="admin-left-content">
                        <a href='/admin-promote' className='white-button'>Promote Post</a>
                        <a href='/admin-create' className='white-button'>Create New Post</a>
                        <a href='/admin-block' className='white-button'>Block Influencer</a>
                    </div>
                    <div className="admin-center-content search-content" >
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPage
