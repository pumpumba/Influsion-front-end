import React from 'react'
import PropTypes from 'prop-types'

class ListOfAdsComponent extends React.Component {
  constructor(props){
    super(props)
  }


  render () {
    return(
      <div className="ad-list-component">
        <span>{this.props.date}</span>
        <span>{this.props.title}</span>
        <span>{this.props.views}</span>
      </div>
    );
  }
}

export default ListOfAdsComponent;
