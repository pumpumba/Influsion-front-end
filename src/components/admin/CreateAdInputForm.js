import React from 'react'
import PropTypes from 'prop-types'

class CreateAdInputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      adUsername: "",
      adText: "",
      imageUrl: "",
      imageVisible: false
    }
  }

  onInsertOfPicture(picUrl) {
    this.setState({ imageUrl: this.picUrl }, () => {
      this.setState({ imageVisible: true })
    });
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

          <button className="white-button" >
            Submit Ad
        </button>
        </form>
      </div>
    );

  }
}

export default CreateAdInputForm;
