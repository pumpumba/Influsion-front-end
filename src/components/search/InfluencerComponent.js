import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { runInThisContext } from 'vm';

class InfluencerComponent extends React.Component {

    render() {
      let twitter = false
      let instagram = false
      let youtube = false
      for (let i = 0; i < this.props.data.pfaccs.platformaccounts.length; i++) {
        !twitter ? twitter = this.props.data.pfaccs.platformaccounts[i].platform ==="twitter" : ''
        !instagram ? instagram = this.props.data.pfaccs.platformaccounts[i].platform ==="instagram" : ''
        !youtube ? youtube = this.props.data.pfaccs.platformaccounts[i].platform ==="youtube" : ' '
      }
      return (
                <div className="searchHeader">
                  <img className="userImage" src={"https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg"} />
                  <NavLink name="userName" to={`${this.props.data.inflid}`}> {this.props.data.influencername} </NavLink>
                  <div className="searchPlatforms" style={{justifyContent:'right', alignItems:'right', textalign:'right'}}>
                    { (twitter) ? <span><FontAwesomeIcon icon={['fab', 'twitter']}/> </span> : '' }
                    { (instagram) ? <span><FontAwesomeIcon icon={['fab', 'instagram']}/> </span> :'' }
                    { (youtube) ? <span><FontAwesomeIcon icon={['fab', 'youtube']}/> </span> :'' }
                  </div>
                </div>
        )
    }
}

export default InfluencerComponent
