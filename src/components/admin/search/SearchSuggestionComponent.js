import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

class SearchSuggestionComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inflid: 0,
        }
        this.setInflId = this.setInflId.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(param, e) {
        e.preventDefault()
        this.setInflId(e, param)
    }
    
    setInflId(e, influencer) {
        this.props.sendId(influencer)
        this.props.sendInfluencerClicked(true)
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
                <button className='name-button' onClick={this.handleClick.bind(this, this.props.data.inflid )}> {this.props.data.influencername} </button>
                <div className='search-platforms' style={{ justifyContent: 'right', alignItems: 'right', textalign: 'right' }}>
                    {(twitter) ? <span><FontAwesomeIcon icon={['fab', 'twitter']} /> </span> : ''}
                    {(instagram) ? <span><FontAwesomeIcon icon={['fab', 'instagram']} /> </span> : ''}
                    {(youtube) ? <span><FontAwesomeIcon icon={['fab', 'youtube']} /> </span> : ''}
                </div>
            </div>
        )
    }
}

export default SearchSuggestionComponent