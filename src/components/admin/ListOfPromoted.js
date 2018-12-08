import React from 'react'
import PropTypes from 'prop-types'
import PromotedListComponent from './PromotedListComponent'
import {BACKEND_URL} from './../../constants'

class ListOfPromoted extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      statusText: ""
    }
  }


  componentDidMount() {
    fetch(BACKEND_URL + 'db/list_all_promoted_posts', {
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => this.setState({data})).catch(error => console.log(error))
  }


  render() {
    let listOfAllPromoted = null
      if (this.state.data.length > 0) {
        let promotedList = this.state.data
        listOfAllPromoted = promotedList.map((curContent, index) => {
          return <PromotedListComponent
            postid={curContent.postid}
            influencerName={curContent.platformcontent.userName || curContent.platformcontent.channel_title}
            nrlikes={curContent.nrlikes}
            popular={curContent.promotedpopular}
            following={curContent.promotedfollowing}
          />
        })
    }

    return (

      <div className="whole-ad-component">
        <h1 className="section-title">List of your Promoted Content</h1>
        <div className="promoted-list-header">
          <span>Post ID</span>
          <span> Influencer </span>
          <span> Promoted At </span>
          <span>Clicks</span>
          <span>Delete</span>
        </div>
        <div className="ad-list">
          {listOfAllPromoted}
        </div>
      </div>
    );
  }
}

export default ListOfPromoted;
