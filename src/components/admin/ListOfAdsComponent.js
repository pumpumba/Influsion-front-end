import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class ListOfAdsComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amountOfClicks: null
    }
  }

  

  render() {
    return (
      <div className="ad-list-component">
        <span>{this.props.index}</span>
        <span>{this.props.data.title}</span>
        <span>{this.props.data.adid}</span>
        <span onClick={() => this.props.onClick()}>
          <FontAwesomeIcon className="trashIcon" icon={'trash'}/></span>
      </div>
    );
  }
}

export default ListOfAdsComponent;
