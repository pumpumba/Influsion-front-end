import React from 'react'
import PropTypes from 'prop-types'

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

    return (
      <div className={classes}
        onClick={() => this.props.onClick()}
        >
        <p>{curIndex}</p>
        <img src={this.props.imageUrl} />
        <p>{this.props.influencerName}</p>
        <p>{this.props.numberOfFollowers}</p>
      </div>
    );

  }
}

export default InfluencerListComponent;
