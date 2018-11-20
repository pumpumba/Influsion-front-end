import React from 'react'
import PropTypes from 'prop-types'

class ListOfAdsComponent extends React.Component {
  constructor(props){
    super(props)
  }


  render () {
    return(
      <div className="ad-list-component">
        <p>{this.props.date}</p>
        <p>{this.props.title}</p>
        <p>{this.props.views}</p>
      </div>
    );
  }
}

export default ListOfAdsComponent;
