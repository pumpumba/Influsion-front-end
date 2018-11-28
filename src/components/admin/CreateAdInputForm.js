import React from 'react'
import PropTypes from 'prop-types'
import {BACKEND_URL} from './../../constants'

class CreateAdInputForm extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      tvOperatorId: 0,
      imageUrl: '',
      textDescription: '',
      additionalInformation: '',
      showInPopular: true,
      showInFollowing: true,
      feed: 'Both',
      imageVisible: false
    }
    this.changeFeed = this.changeFeed.bind(this)
    this.createNewAd = this.createNewAd.bind(this)
  }

  createNewAd(e) {
      e.preventDefault()
      fetch(BACKEND_URL + 'db/create_ad/', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: this.state.title, tvoperatorid: this.state.tvOperatorId, imgurl: this.state.imageUrl,
                                 textdescription: this.state.textDescription, additionalinformation: this.state.additionalInformation,
                                 showinpopularfeed: this.state.showInPopular, showinfollowingfeed: this.state.showInFollowing})
      })
          // .then(response => response.json())
          // .then(response => (response.createSuccess) ? this.props.registerSuccsessfull() : this.props.registerUnsuccsessfull())
          // .catch(error => this.props.registerUnsuccsessfull())
  }

  onInsertOfPicture(picUrl) {
    this.setState({ imageUrl: this.picUrl }, () => {
      this.setState({ imageVisible: true })
    });
  }

  changeFeed(input) {
      if (this.state.feed === "Popular") {
          this.setState({ showInFollowing: false })
          this.setState({ showInPopular: true })
      } else if (this.state.feed === "Following") {
          this.setState({ showInPopular: false })
          this.setState({ showInFollowing: true })
      } else {
        this.setState({ showInPopular: true })
        this.setState({ showInPopular: true })
      }
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
            <select name="feed"
                onChange={(e) => this.setState({ feed: e.target.value }, this.changeFeed())}>
                <option value="Both">Both</option>
                <option value="Popular">Popular</option>
                <option value="Following">Following</option>
                </select>
                Feed
          </label>
          <button onClick={this.createNewAd}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateAdInputForm;
