import React from 'react'
import CreateAd from './../CreateAd'
import ListOfAds from './../ListOfAds'
import MostFollowedAd from './../5MostFollowedByAd'

class AdTab extends React.Component {
  constructor(){
    super()
    this.state ={
      activeAd: ''

    }
    this.sendAdId = this.sendAdId.bind(this)
  }

  sendAdId(id){

    this.setState({activeAd: id})
  }

  render() {

    return (
      <div className="ad-tab-content">
        <CreateAd />
        <ListOfAds sendId={this.sendAdId} />
        <div className='most-followed-ad'>
            <MostFollowedAd adId={this.state.activeAd}/>
        </div>
      </div>
    )
  }
}

export default AdTab;
