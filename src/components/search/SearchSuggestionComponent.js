import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import placeHolder from './../../../img/placeholder.png'
import { StopPropagation } from 'react-clickable';

class SearchSuggestionComponent extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
      }
      this.onClick = this.onClick.bind(this)
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

        let profileImage = ''
        if (!notFound) {
            let pictureFound = false
            for (let i = 0; i < this.props.data.pfaccs.platformaccounts.length; i++) {
                if (this.props.data.pfaccs.platformaccounts[i].img_url != null) {
                    profileImage = <img src = {this.props.data.pfaccs.platformaccounts[i].img_url}/>
                    pictureFound = true
                    break
                }
            }
            if (!pictureFound) {
                profileImage = <img src={placeHolder} />
            }
        }

        return (
            <NavLink className='search-header'  to={`/infl/${this.props.data.inflid}`}>
                {profileImage}
                <h2> {this.props.data.influencername} </h2> 
                  <div className='search-platforms' style={{ justifyContent: 'right', alignItems: 'right', textalign: 'right' }}>
                      {(twitter) ? <span><FontAwesomeIcon icon={['fab', 'twitter']} /> </span> : ''}
                      {(instagram) ? <span><FontAwesomeIcon icon={['fab', 'instagram']} /> </span> : ''}
                      {(youtube) ? <span><FontAwesomeIcon icon={['fab', 'youtube']} /> </span> : ''}
                  </div>
            </NavLink>
        )
    }
}

export default SearchSuggestionComponent
