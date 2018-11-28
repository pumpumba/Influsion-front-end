import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

class BlockSuggestionComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.block = this.block.bind(this)
    this.blockTrue = this.blockTrue.bind(this)
  }

  block(e) {
    fetch(BACKEND_URL + 'db/exclude_influencer', {})
    .then(response => response.json())
    .then(response => (response.createSuccess) ? this.blockTrue : '')
  }

  blockTrue() {
    this.setState({
      blockSuccess: true
    })
  }

    render() {

        let notFound = this.props.data.influencername === 'No matching influencers'
        let profileImage
        if (!notFound) {
            profileImage = <img src={'https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg'} />
        } else {
            profileImage = ''
        }

        return (
            <div className='search-header'>
                {profileImage}
                {this.props.data.influencername}
                {this.state.blockFail && <p className='block-msg'> Please try again</p>}
                <div className='block-platforms'>
                  {this.state.blockSuccess && <p className='block-msg'>Block succesfull!</p>}
                  {!this.state.blockSuccess && <div className="blockButton" onClick={this.block}>
                    Block
                  </div> }
                </div>
            </div>
        )
    }
}

export default BlockSuggestionComponent
