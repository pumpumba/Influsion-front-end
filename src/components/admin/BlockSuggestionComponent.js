import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

class BlockSuggestionComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.block = this.block.bind(this)
  }

  block(e) {
    this.setState({
      blockSuccess: true
    })
  }
    render() {
        let twitter = false
        let instagram = false
        let youtube = false
        let notFound = this.props.data.influencername === 'No matching influencers'

        for (let i = 0; i < this.props.data.pfaccs.platformaccounts.length; i++) {
            !twitter ? twitter = this.props.data.pfaccs.platformaccounts[i].platform === 'twitter' : ''
            !instagram ? instagram = this.props.data.pfaccs.platformaccounts[i].platform === 'instagram' : ''
            !youtube ? youtube = this.props.data.pfaccs.platformaccounts[i].platform === 'youtube' : ' '
        }

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
                {this.state.blockSuccess && <p className='block-msg'>Block succesfull!</p>}
                {this.state.blockFail && <p className='block-msg'> Please try again</p>}
                <div className='search-platforms' style={{ justifyContent: 'right', alignItems: 'right', textalign: 'right' }}>
                  <div className="blockButton" onClick={this.block}>
                    Block
                  </div>
                </div>
            </div>
        )
    }
}

export default BlockSuggestionComponent
