import React from 'react'
import PropTypes from 'prop-types'
import ListOfAdsComponent from './ListOfAdsComponent'


class ListOfAds extends React.Component {
  render () {
    return(
      <div>
        <h1 className="ad-list-title">List of your ads</h1>
          <div className="ad-list-header">
            <p>
              Title
            </p>
            <p>
              Clicks
            </p>
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
