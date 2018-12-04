import React from 'react'
import PropTypes from 'prop-types'
import {BACKEND_URL} from './../../constants'

class BlockedListComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      unblockSuccess: false
    }
    this.unBlock = this.unBlock.bind(this)
  }

  unBlock() {
      this.setState({
        unblockSuccess: true
      })
      fetch(BACKEND_URL + 'db/remove_excluded_or_promoted_influencer', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({influencerId: this.props.index })
      })
      .then(response => response.json())
    }

  render () {
    return (
      <div className="influencer-list-component">
        <p>{this.props.index}</p>
        <img src={this.props.pic} />
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
