import React from 'react'
import PropTypes from 'prop-types'
import {BACKEND_URL} from './../../constants'

class CreateAdInputForm extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      tvOperatorId: 1,
      imageUrl: '',
      textDescription: '',
      additionalInformation: '',
      popularFeed: false,
      followingFeed: false,
      imageVisible: false
    }

    this.createNewAd = this.createNewAd.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

  }

  createNewAd(e) {
      e.preventDefault()
      fetch(BACKEND_URL + 'db/create_ad/', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: this.state.title, tvoperatorid: this.state.tvOperatorId, imgurl: this.state.imgUrl,
                                 textdescription: this.state.textDescription, additionalinformation: this.state.additionalInformation,
                                 showinpopularfeed: this.state.popularFeed, showinfollowingfeed: this.state.followingFeed })
      })

  }

  onInsertOfPicture(picUrl) {
    this.setState({ imageUrl: this.picUrl }, () => {
      this.setState({ imageVisible: true })
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this)

  }

  render() {

    return (
      <div className="create-ad-container">
        <form className='white-form'>
          <input
            className="ad-title"
            type="text"
            placeholder="Title"
            min="0"
            max="20"
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <input
            className="ad-picture-input"
            type="text"
            placeholder="Picture url"
            onChange={(e) => this.setState({ imageUrl: e.target.value })}
          />
          <img className="pictureForAd" src={this.state.imageUrl} />
          <input
            className="text-description"
            type="text"
            placeholder="Description"
            onChange={(e) => this.setState({ textDescription: e.target.value })}
          />
          <input
            className="additional-information"
            type="text"
            placeholder="Additional information"
            onChange={(e) => this.setState({ additionalInformation: e.target.value })}
          />

          <label>
            Popular feed:
            <input
              name="popularFeed"
              type="checkbox"
              checked={this.state.popularFeed}
              onChange={this.handleInputChange} />
          </label>

          <label>
            Following feed:
            <input
              name="followingFeed"
              type="checkbox"
              checked={this.state.followingFeed}
              onChange={this.handleInputChange} />
          </label>

          <button onClick={this.createNewAd}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateAdInputForm;
