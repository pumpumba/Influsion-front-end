import React from 'react'
import CreateAd from './../CreateAd'
import ListOfAds from './../ListOfAds'
import MostFollowedAd from './../5MostFollowedByAd'

class AdTab extends React.Component {
  constructor(){
    super()
  
  }
  render() {

    return (
      <div className="ad-tab-content">
        <CreateAd />
        <ListOfAds />
        <div className='most-followed-ad'>
            <MostFollowedAd/>
        </div>
      </div>
    )
  }
}

export default AdTab;
