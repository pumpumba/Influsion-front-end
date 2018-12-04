import React from 'react'
import PropTypes from 'prop-types'
import placeHolder from './../../../img/placeholder.png'


class InfluencerListComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    var classes = "influencer-list-component"
    if(this.props.isActive){
      classes = "influencer-list-component active"
    }
    let curIndex = this.props.index + 1
    let imageUrl = placeHolder

    if (this.props.imgs != null && this.props.imgs != undefined) {
        for (let i = 0; i < this.props.imgs.platformaccounts.length; i++) {
          if (this.props.imgs.platformaccounts[i].imgurl != null &&
              this.props.imgs.platformaccounts[i].imgurl != undefined) {
                imageUrl = this.props.imgs.platformaccounts[i].imgurl
                break
          }
        }
    }

    return (
      <div className={classes}
        onClick={() => this.props.onClick()}
        >
        <p>{curIndex}</p>
        <img src={imageUrl} />
        <p>{this.props.influencerName}</p>
        <p>{this.props.numberOfFollowers}</p>
      </div>
    );

  }
}

export default InfluencerListComponent;
