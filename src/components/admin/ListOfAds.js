import React from 'react'
import PropTypes from 'prop-types'
import ListOfAdsComponent from './ListOfAdsComponent'


class ListOfAds extends React.Component {
  render () {
    return(
      <div className='admin-box'>
        <h1 className="section-title">List of your ads</h1>
          <div className="ad-list-header">
            <span>Date</span>
            <span>Title</span>
            <span>Clicks</span>
          </div>
        <div className="ad-list">

          <ListOfAdsComponent date="27/11" title="CocaCola ad" views="307"/>
          <ListOfAdsComponent date="20/11" title="Pepsi ad" views="70"/>
          <ListOfAdsComponent date="12/11" title="Car ad" views="155"/>
          <ListOfAdsComponent date="29/10" title="Cinema ad" views="200"/>
          <ListOfAdsComponent date="25/10" title="Sport eq. ad" views="44"/>
        </div>
      </div>
    );
  }
}

export default ListOfAds;
