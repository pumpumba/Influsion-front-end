import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class InfluencerComponent extends React.Component {

    render() {
            return (
                <div className="searchHeader">
                  <img className="userImage" src={"https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg"} />
                  <a className="userName" href={`/1`}> {this.props.name} </a>
                  <div className="searchPlatforms">
                    { (this.props.tweet.trim() =="") ? '' : <span><FontAwesomeIcon   icon={['fab', 'twitter']}/> </span>  }
                    { (this.props.insta.trim() =="") ? '' : <span><FontAwesomeIcon icon={['fab', 'instagram']}/> </span>  }
                    { (this.props.youtube.trim() =="") ? '' : <span><FontAwesomeIcon icon={['fab', 'youtube']}/> </span>  }
                  </div>
                </div>
        )
    }
}

export default InfluencerComponent
