import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {BACKEND_URL} from './../../constants'

class ListOfAdsComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicksOverTime: null,
      totalClicks: null
    }
    this.getClicksOnAds = this.getClicksOnAds.bind(this)
    this.addAndSumClicks = this.addAndSumClicks.bind(this)
  }

  getClicksOnAds() {
    fetch(BACKEND_URL + 'db/get_visits_over_time_for_ad?ad_id=' + this.props.data.adid, {
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
    .then(data => this.addAndSumClicks(data))
    .catch(error => console.log(error))
  }

  addAndSumClicks(data){
    let sumOfClicks =0
    this.setState({clicksOverTime:data})
    data.map((date) =>
      sumOfClicks += parseInt(date.nrvisitsonday)
    ).then(
      this.setState({totalClicks:sumOfClicks})
    )
  }

  componentDidMount(){
    this.getClicksOnAds()
  }




  render() {
    return (
      <div className="ad-list-component">
        <span>{this.props.index + 1}.</span>
        <span onClick={this.getClicksOnAds}>{this.props.data.title}</span>
        <span title="Database id of Ad">{this.props.data.adid}</span>
        <span title="Total amount of clicks on ad">{this.state.totalClicks}</span>
        <span title="Delete this ad" onClick={() => this.props.onClick()}>
          <FontAwesomeIcon className="trashIcon" icon={'trash'}/></span>
      </div>
    );
  }
}

export default ListOfAdsComponent;
