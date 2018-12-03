import React from 'react'
import PropTypes from 'prop-types'
import {BACKEND_URL} from './../../constants'

class PromoteAdInputForm extends React.Component {

  constructor() {
    super();
    this.state = {
      postId: '',
      popularFeed: false,
      followingFeed: false
    }

    this.promoteNewAd = this.promoteNewAd.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

  }

  promoteNewAd(e) {
    e.preventDefault()
    if (this.state.popularFeed === true && this.state.followingFeed === false) {
      fetch(BACKEND_URL + 'db/promote_post_popular/', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ postid: this.state.postId})
      })
    } else if (this.state.popularFeed === false && this.state.followingFeed === true) {
      fetch(BACKEND_URL + 'db/promote_post_following/', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ postid: this.state.postId})
      })
    } else if (this.state.popularFeed === true && this.state.followingFeed === true) {
      fetch(BACKEND_URL + 'db/promote_post_following/', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ postid: this.state.postId})
      })
      fetch(BACKEND_URL + 'db/promote_post_popular/', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ postid: this.state.postId})
      })
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  render() {

    return (
      <div className="promote-post-container">
        <form className='white-form'>
        <input
          className="post-id"
          type="text"
          placeholder="Post id"
          onChange={(e) => this.setState({ postId: e.target.value })}
        />
          <label>
            Popular feed
            <input
              name="popularFeed"
              type="checkbox"
              checked={this.state.popularFeed}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Following feed
            <input
              name="followingFeed"
              type="checkbox"
              checked={this.state.followingFeed}
              onChange={this.handleInputChange} />
          </label>
          <button className="post-button" onClick={this.promoteNewAd}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PromoteAdInputForm;
