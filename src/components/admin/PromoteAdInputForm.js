import React from 'react'
import PropTypes from 'prop-types'
import {BACKEND_URL} from './../../constants'

class PromoteAdInputForm extends React.Component {

  constructor() {
    super();
    this.state = {

    }

  }

  // promoteNewAd(e) {
  //     e.preventDefault()
  //     fetch(BACKEND_URL + 'db/create_ad/', {
  //         method: 'post',
  //         headers: {
  //             'Accept': 'application/json, text/plain, */*',
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ title: this.state.title, tvoperatorid: this.state.tvOperatorId, imgurl: this.state.imageUrl,
  //                                textdescription: this.state.textDescription, additionalinformation: this.state.additionalInformation,
  //                                showinpopularfeed: this.state.showInPopular, showinfollowingfeed: this.state.showInFollowing})
  //     })
  //         // .then(response => response.json())
  //         // .then(response => (response.createSuccess) ? this.props.registerSuccsessfull() : this.props.registerUnsuccsessfull())
  //         // .catch(error => this.props.registerUnsuccsessfull())
  // }


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
          />
          <button onClick={this.promoteNewAd}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PromoteAdInputForm;
