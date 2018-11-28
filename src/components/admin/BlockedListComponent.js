import React from 'react'
import PropTypes from 'prop-types'

class BlockedListComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      unblockSuccess: false
    }
    this.unBlock = this.unBlock.bind(this)
  }

  unBlock(e) {
    this.setState({
      unblockSuccess: true
    })
  }

  render () {

    var classes = "influencer-list-component"
    if(this.props.isActive){
      classes = "influencer-list-component active"
    }

    return (
      <div className={classes}
          onClick={() => this.props.onClick()}
        >
        <p>{this.props.index}</p>
        <img src="https://scontent-arn2-1.cdninstagram.com/vp/a775df49ed4c6966eeb7c43f83b15850/5C8B539B/t51.2885-19/11017586_953035901381515_1619288648_a.jpg"/>
        <p>{this.props.influencerName}</p>
        {this.state.unblockSuccess && <p className='block-platforms'>Unblock succesfull!</p>}
        {!this.state.unblockSuccess && <div className="unblockButton" onClick={this.unBlock}>
          Unblock
        </div> }
      </div>


    );

  }
}

export default BlockedListComponent;
