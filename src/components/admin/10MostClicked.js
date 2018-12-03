import React from 'react'
import PropTypes from 'prop-types'
import InfluencerListComponent from './InfluencerListComponent'
import {BACKEND_URL} from './../../constants'

class InfluencerList extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: Array(9).fill(false),
      lastActive: null,
      response: [],
    }

  }

  handleClick(i) {
    // const ar = this.state.isActive.slice()
    // ar[i] = !ar[i]
    // if (i != this.state.lastActive) {
    //   ar[this.state.lastActive] = false
    // }
    // this.setState({ isActive: ar })
    // this.setState({ lastActive: i })
  }

  componentDidMount() {
    fetch(BACKEND_URL + 'db/get_top_clicked_influencers', {})
        .then(response => response.json())
        // .then(response => console.log(response.rows.length))
        .then(response => this.setState({ response }))
  }

  render() {
    let listContent = null
    // console.log(this.state.response.rows)
    if (this.state.response.rows !== undefined) {
      if (this.state.response.rows.length > 0) {
        listContent = this.state.response.rows.map(curContent => {
          let curIndex = 0
          return <InfluencerListComponent
                    key={curContent.influencerid}
                    index={curIndex++}
                    influencerName={curContent.influencername}
                    isActive={false}
                    numberOfClicks={curContent.nrclicks}
                    // imageUrl={curContent.piclink}
                  />
        })
      }
    }
    return (
      <div className='admin-box'>
        <h1 className="section-title"> The top 10 most clicked influencers</h1>
        <div className="influencer-list-header">
          <span>Rank</span>
          <span></span>
          <span>
            Influencer
          </span>
          <span>
            Followers
          </span>
        </div>
        {listContent}
      </div>


    );
  }
}

export default InfluencerList;
