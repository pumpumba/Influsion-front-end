import React from 'react'
import PropTypes from 'prop-types'
import ListOfAdsComponent from './ListOfAdsComponent'
import {BACKEND_URL} from './../../constants'

class ListOfAds extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      statusText: ""
    }
    this.getAllAds = this.getAllAds.bind(this)
    this.printAllAds = this.printAllAds.bind(this)
    this.removeAdd = this.removeAdd.bind(this)
    this.changeStateArray = this.changeStateArray.bind(this)
  }

  getAllAds() {
    fetch(BACKEND_URL + 'db/get_ads', {
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => this.setState({data})).catch(error => console.log(error))
  }

  printAllAds() {

    if (this.state.data.rows != "undefined") {
      const allAds = this.state.data.rows
      const listOfAllAds = allAds.map((ad, index) => <ListOfAdsComponent key={index} data={ad} sendId={this.props.sendId}/>)
      return listOfAllAds
    }

  }

  componentDidMount() {
    this.getAllAds()
  }

  removeAdd(indexInArray, AdId) {
    fetch(BACKEND_URL + 'db/remove_ad/', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: AdId})
    }).then(response => response.json()).then(data => {
      this.changeStateArray(AdId)
    }).catch(error => console.log(error))

  }

  changeStateArray(AdId) {
    let copyOfData = this.state.data
    copyOfData.rows = copyOfData.rows.filter(item => item.adid != AdId)
    this.setState({data: copyOfData})
    this.setState({statusText: "The add has been removed!"})
    setTimeout(() => this.setState({statusText: ""}), 4000)
  }

  render() {
    let listOfAllAds
    let statusText
    if (this.state.data.rows != null) {
      let allAds = this.state.data.rows
      listOfAllAds = allAds.map((ad, index) => <ListOfAdsComponent key={index} data={ad} index={index} onClick={() => this.removeAdd(index, ad.adid)} sendId={this.props.sendId}/>)
    }

    if (this.state.statusText != "") {
      statusText = this.state.statusText
    }

    return (

      <div className="whole-ad-component">
        <h1 className="section-title">List of your ads</h1>
        <p className="status-text">{statusText}</p>
        <div className="ad-list-header">
          <span className="title-span">Title</span>
          <span>ID</span>
          <span>Clicks</span>
        </div>
        <div className="ad-list">
          {listOfAllAds}
        </div>
      </div>
    );
  }
}

export default ListOfAds;
