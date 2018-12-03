import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {BACKEND_URL} from './../../constants'

class BlockSuggestionComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.blockTrue = this.blockTrue.bind(this)
  }

  blockTrue() {
    this.setState({
      blockSuccess: true
    })

    fetch(BACKEND_URL + 'db/exclude_influencer', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({influencerId: this.props.data.inflid})
    })
    .then(response => response.json())
  }

    render() {
        let notFound = this.props.data.influencername === 'No matching influencers'
    

        return (
            <div className='search-header'>
                <img src={this.props.data.pfaccs.platformaccounts[0].img_url} />
                {this.props.data.influencername}
                <div className='block-platforms'>
                  {this.state.blockSuccess && <p className='block-msg'>Block succesfull!</p>}
                  {!this.state.blockSuccess && <div className="blockButton" onClick={this.blockTrue} >
                    Block
                  </div> }
                </div>
            </div>
        )
    }
}

export default BlockSuggestionComponent
