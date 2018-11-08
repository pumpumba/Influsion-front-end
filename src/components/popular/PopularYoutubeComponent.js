import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PopularComponentClosedView from './popularSubComponents/PopularComponentClosedView'
import PopularComponentExpandedView from './popularSubComponents/PopularComponentExpandedView'
import {followInfluencer, unfollowInfluencer} from '../functions/followAndUnfollowInfluencer'

class PopularYoutubecomponent extends React.Component {
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
      if (this.props.data != null && this.props.data.platform.toLowerCase() == 'youtube' ) {
          let imageArr = []
          imageArr.push(this.props.data.video_thumbnail_url)
          const styles = {
              backgroundImage: 'url(' + imageArr + ')'
          }
          return (
              <div
                  className='popular-component-wrapper'
                  style={styles}
                  data-state={this.state.open ? 'open' : 'closed'}
                  onClick={this.onClick}
              >
                  <PopularComponentClosedView
                      backgroundImage={imageArr}
                      userProfileImageUrl={this.props.data.video_thumbnail_url}
                      url={this.props.data.video_url}
                      changeHeart={this.changeHeart}
                      icon={<FontAwesomeIcon icon={['fab', 'youtube']} />}
                      platform={this.props.data.platform}
                      heart={this.state.heart}

                  />
                  <PopularComponentExpandedView
                      userProfileImageUrl={this.props.data.video_thumbnail_url}
                      userName={this.props.data.channel_title}
                      url={this.props.data.video_url}
                      caption={this.props.data.video_description}
                      videoUrl={this.props.data.video_embeded_url}
                      noOfLikes={this.props.data.video_like_count}
                      noOfComments={this.props.data.video_comment_count}
                      noOfViews={this.props.data.video_view_count}
                      timestamp={this.props.data.video_created_at}
                      changeHeart={this.changeHeart}
                      icon={<FontAwesomeIcon icon={['fab', 'youtube']} />}
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

export default PopularYoutubecomponent
