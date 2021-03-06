import React from 'react'
import PropTypes from 'prop-types'
import InfluencerListComponent from './InfluencerListComponent'


class InfluencerList extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: Array(9).fill(false),
      lastActive: null,
    }

  }

  handleClick(i) {
    const ar = this.state.isActive.slice()
    ar[i] = !ar[i]
    if (i != this.state.lastActive) {
      ar[this.state.lastActive] = false
    }
    this.setState({ isActive: ar })
    this.setState({ lastActive: i })
  }

  render() {
    return (
      <div className='admin-box'>
        <h1 className="section-title"> The top 10 most followed influencers</h1>
        <div className="influencer-list-header">
          <span>Rank</span>
          <span></span>
          <span>
            Influencer
          </span>
          <span>
            Followers
          </span>
        </div>

        <InfluencerListComponent numberOfFollowers="11234" influencerName="Pumba" index="1" isActive={this.state.isActive[0]} onClick={() => this.handleClick(0)} />
        <InfluencerListComponent numberOfFollowers="8670" influencerName="Rita" index="2" isActive={this.state.isActive[1]} onClick={() => this.handleClick(1)} />
        <InfluencerListComponent numberOfFollowers="4670" influencerName="PewdiePie" index="3" isActive={this.state.isActive[2]} onClick={() => this.handleClick(2)} />
        <InfluencerListComponent numberOfFollowers="4567" influencerName="Ellen DG" index="4" isActive={this.state.isActive[3]} onClick={() => this.handleClick(3)} />
        <InfluencerListComponent numberOfFollowers="4130" influencerName="POTUS" index="5" isActive={this.state.isActive[4]} onClick={() => this.handleClick(4)} />
        <InfluencerListComponent numberOfFollowers="3002" influencerName="Bill Gates" index="6" isActive={this.state.isActive[5]} onClick={() => this.handleClick(5)} />
        <InfluencerListComponent numberOfFollowers="2000" influencerName="Casey Niestat" index="7" isActive={this.state.isActive[6]} onClick={() => this.handleClick(6)} />
        <InfluencerListComponent numberOfFollowers="1212" influencerName="Lady Gaga" index="8" isActive={this.state.isActive[7]} onClick={() => this.handleClick(7)} />
        <InfluencerListComponent numberOfFollowers="670" influencerName="Jolina Olaussen" index="9" isActive={this.state.isActive[8]} onClick={() => this.handleClick(8)} />
        <InfluencerListComponent numberOfFollowers="3" influencerName="Jonas Olaussen" index="10" isActive={this.state.isActive[9]} onClick={() => this.handleClick(9)} />
      </div>


    );
  }
}

export default InfluencerList;
