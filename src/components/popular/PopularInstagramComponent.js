import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'
import { StopPropagation } from 'react-clickable';
import PopularComponentClosedView from './popularSubComponents/PopularComponentClosedView'
import PopularComponentExpandedView from './popularSubComponents/PopularComponentExpandedView'
import {followInfluencer, unfollowInfluencer} from '../functions/followAndUnfollowInfluencer'


class PopularInstagramComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        open: false,
        heart: false
    }

    this.onClick = this.onClick.bind(this)
    this.changeHeart = this.changeHeart.bind(this)
  }
  onClick() {
      this.setState(prevState => ({
          open: !prevState.open
      }))
  }

  changeHeart() {
      this.setState(prevState => ({
          heart: !prevState.heart
      }))
      if (this.state.heart) {
          unfollowInfluencer(this.props.userId, this.props.data.realInfluencerName)
      } else {
          followInfluencer(this.props.userId, this.props.data.realInfluencerName)
      }
  }


  render() {
      if (this.props.data != null && this.props.data.platform == 'instagram' ) {
          const styles = {
              backgroundImage: 'url(' + this.props.data.post_media[0] + ')'
          }
          return (
              <div
                  className='popular-component-wrapper'
                  style={styles}
                  data-state={this.state.open ? 'open' : 'closed'}
                  onClick={this.onClick}
              >
                  <PopularComponentClosedView
                      backgroundImage={this.props.data.post_media}
                      userProfileImageUrl={this.props.data.user_profile_image_url}
                      url={this.props.data.post_url}
                      changeHeart={this.changeHeart}
                      heart={this.state.heart}
                      icon={<FontAwesomeIcon icon={['fab', 'instagram']} />}
                      platform={this.props.data.platform}
                      influencerId={this.props.data.realInfluencerName}

                  />
                  <PopularComponentExpandedView
                      userProfileImageUrl={this.props.data.user_profile_image_url}
                      userName={this.props.data.user_name}
                      url={this.props.data.post_url}
                      caption={this.props.data.post_text}
                      img={this.props.data.post_media[0]}
                      noOfLikes={this.props.data.post_like_count}
                      timestamp={this.props.data.psot_created_at}
                      changeHeart={this.changeHeart}
                      icon={<FontAwesomeIcon icon={['fab', 'instagram']} />}
                      platform={this.props.data.platform}
                      heart={this.state.heart}
                      influencerId={this.props.data.realInfluencerName}
                  />
                  <div className='blur-overlay'></div>
              </div>
          )
        } else return null
  }
}

export default PopularInstagramComponent
