import React from 'react'
import PropTypes from 'prop-types'
import InfluencerListComponent from './InfluencerListComponent'


class InfluencerList extends React.Component {

  render () {
    return(
      <div>
        <h1 className="influencer-list-title"> The top 10 most followed influencers</h1>
        <InfluencerListComponent numberOfFollowers="45670" influencerName="Jesper" index="1"/>
        <InfluencerListComponent numberOfFollowers="45670" influencerName="Jesper" index="2"/>
        <InfluencerListComponent numberOfFollowers="45670" influencerName="Jesper" index="3"/>
        <InfluencerListComponent numberOfFollowers="45670" influencerName="Jesper" index="4"/>
        <InfluencerListComponent numberOfFollowers="3" influencerName="Jonas" index="5"/>
        <InfluencerListComponent numberOfFollowers="45670" influencerName="Jesper" index="6"/>
        <InfluencerListComponent numberOfFollowers="45670" influencerName="Jesper" index="7"/>
        <InfluencerListComponent numberOfFollowers="45670" influencerName="Jesper" index="8"/>
        <InfluencerListComponent numberOfFollowers="45670" influencerName="Jesper" index="9"/>
        <InfluencerListComponent numberOfFollowers="45670" influencerName="Jesper" index="10"/>
      </div>


    );
  }
}

export default InfluencerList;
