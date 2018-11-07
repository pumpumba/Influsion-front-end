import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'
import { StopPropagation } from 'react-clickable';
import PopularComponentClosedView from './popularSubComponents/PopularComponentClosedView'
import PopularComponentExpandedView from './popularSubComponents/PopularComponentExpandedView'


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
  }

  render() {
      if (this.props.data != null && this.props.data.platform == 'instagram' ) {
          const styles = {
              backgroundImage: 'url(' + this.props.data.platformcontent.post_media[0] + ')'
          }
          return (
              <div
                  className='popular-component-wrapper'
                  style={styles}
                  data-state={this.state.open ? 'open' : 'closed'}
                  onClick={this.onClick}
              >
                  <PopularComponentClosedView
                      backgroundImage={this.props.data.platformcontent.post_media}
                      userProfileImageUrl={this.props.data.platformcontent.user_profile_image_url}
                      url={this.props.data.platformcontent.post_url}
                      changeHeart={this.changeHeart}
                      icon={<FontAwesomeIcon icon={['fab', 'instagram']} />}
                      platform={this.props.data.platformcontent.platform}
                  />
                  <PopularComponentExpandedView
                      userProfileImageUrl={this.props.data.platformcontent.user_profile_image_url}
                      userName={this.props.data.platformcontent.user_name}
                      url={this.props.data.platformcontent.post_url}
                      caption={this.props.data.platformcontent.post_text}
                      img={this.props.data.platformcontent.post_media[0]}
                      noOfLikes={this.props.data.platformcontent.post_like_count}
                      timestamp={this.props.data.platformcontent.psot_created_at}
                      changeHeart={this.changeHeart}
                      icon={<FontAwesomeIcon icon={['fab', 'instagram']} />}
                      platform={this.props.data.platformcontent.platform}
                  />
                  <div className='blur-overlay'></div>
              </div>
          )
        } else return null
  }
}

export default PopularInstagramComponent
