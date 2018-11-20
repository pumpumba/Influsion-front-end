import React from 'react'
import PropTypes from 'prop-types'
import ListOfAdsComponent from './ListOfAdsComponent'


class ListOfAds extends React.Component {
  render () {
    return(
      <div>
        <h1 className="ad-list-title">List of your ads</h1>
        <div className="ad-list">
          <ListOfAdsComponent date="27/11" title="cocacola ad" views="48"/>
          <ListOfAdsComponent date="27/11" title="cocacola ad" views="48"/>
          <ListOfAdsComponent date="27/11" title="cocacola ad" views="48"/>
          <ListOfAdsComponent date="27/11" title="cocacola ad" views="48"/>
          <ListOfAdsComponent date="27/11" title="cocacola ad" views="48"/>
        </div>
      </div>
    );
  }
}

export default ListOfAds;
