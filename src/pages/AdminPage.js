import React from 'react'
import Popular from './Popular'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts'
import Statistics from './../components/admin/Statistics'
import CreateAd from './../components/admin/CreateAd'
import InfluencerList from './../components/admin/InfluencerList'
import ListOfAds from './../components/admin/ListOfAds'
import StatisticsPlatform from './../components/admin/StatisticsPlatform'
import AdminFooter from './../components/admin/AdminFooter'


class AdminPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isPageStatistics: true,
        }
        this.rightClickContent = this.rightClickContent.bind(this)
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
                    <h1>
                        inFlusion: Admin
                    </h1>
                </header>
                <div className="admin-content">
                    <div className="admin-left-content">
                        {stats}
                    </div>
                    <div className="admin-center-content" onClick={this.rightClickContent}>
                        <InfluencerList />
                    </div>
                    <div className="admin-right-content">
                        <ListOfAds />
                        <CreateAd />
                    </div>
                </div>
                <div>
                    <AdminFooter />
                </div>
            </div>

        )
    }
}

export default AdminPage
