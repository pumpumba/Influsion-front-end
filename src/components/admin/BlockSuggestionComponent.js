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
        let img_url

        for (var i = 0; i < this.props.data.pfaccs.platformaccounts.length; i++) {
          if(this.props.data.pfaccs.platformaccounts[i].img_url!=null){
            img_url=this.props.data.pfaccs.platformaccounts[i].img_url
            break;
          }
        }

        return (
            <div className='search-header'>
                <img src={img_url} />
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
