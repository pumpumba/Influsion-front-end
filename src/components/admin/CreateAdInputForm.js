import React from 'react'
import PropTypes from 'prop-types'
import {BACKEND_URL} from './../../constants'


class CreateAdInputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      adUsername: "",
      adText: "",
      imageUrl: "",
      imageVisible: false,
      inPopularFeed: false,
      inFollowingFeed: false
    }
    this.handleCheckbox=this.handleCheckbox.bind(this)
    this.onInsertOfPicture=this.onInsertOfPicture.bind(this)
    this.addSubmitted=this.addSubmitted.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  onInsertOfPicture(picUrl) {
    this.setState({ imageUrl: this.picUrl }, () => {
      this.setState({ imageVisible: true })
    });
  }

  handleCheckbox(event) {
  const target = event.target
  const value = target.type === 'checkbox' ? target.checked : target.value
  const name = target.name

  this.setState({
      [name]: value
    })
}

addSubmitted(){
  console.log("gick igenom")
  this.setState({
    adUsername: "",
    adText: "",
    imageUrl: "",
    imageVisible: false,
    inPopularFeed: false,
    inFollowingFeed: false
  })
}

  handleSubmit(e){
    e.preventDefault()
    console.log("sumbitted ad")
    fetch(BACKEND_URL + 'db/create_ad/', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.adUsername,
          tvoperatorid: 1,
          imgurl: this.state.imageUrl,
          textdescription: this.state.adText,
          additionalinformation: "",
          showinpopularfeed:this.state.inPopularFeed,
          showinfollowingfeed:this.state.inFollowingFeed})
    })
        .then(response => response.json())
        .then(response => (response.createSuccess) ? this.addSubmitted() : console.log("gick inte igenom"))
        .catch(error => console.log(error))

}

  render() {
    return (
      <div className="create-ad-container">
        <form className='white-form'>
          <input
            className="ad-username"
            type="text"
            placeholder="Ad title"
            min="0"
            max="20"
            onChange={(e) => this.setState({ adUsername: e.target.value })}
          />
            <input
              className="ad-picture-input"
              type="text"
              placeholder="Picture url"
              onChange={(e) => this.setState({ imageUrl: e.target.value })}
            />
            <img className="pictureForAd" src={this.state.imageUrl} />

          <textarea
            className="ad-content-text"
            type="textarea"
            placeholder="Put content text here"
            onChange={(e) => this.setState({ adText: e.target.value })}
          />

        <div className="all-checkboxes">
          <div className="popular-box">
          <label>
            On popular feed:
            </label>
            <input
              className = "on-popular-feed-box"
              type="checkbox"
              name="inPopularFeed"
              checked={this.state.inPopularFeed}
              onChange={this.handleCheckbox}
              >
            </input>

          </div>
          <div className="following-box">
          <label>
            On following feed:
            </label>
            <input
              className = "on-following-feed-box"
              type="checkbox"
              name="inFollowingFeed"
              checked={this.state.inFollowingFeed}
              onChange={this.handleCheckbox}
              >
            </input>
          </div>
        </div>

          <button className="white-button"  onClick={this.handleSubmit} >
            Submit Ad
          </button>
        </form>
      </div>
    );

  }
}

export default CreateAdInputForm;
