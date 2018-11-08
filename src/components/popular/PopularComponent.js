import React from 'react'
import PopularComponentClosedView from './popularSubComponents/PopularComponentClosedView'
import PopularComponentExpandedView from './popularSubComponents/PopularComponentExpandedView'
import {followInfluencer, unfollowInfluencer} from '../functions/followAndUnfollowInfluencer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class PopularComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            heart: false
        }

        this.onClick = this.onClick.bind(this)
        this.changeHeart = this.changeHeart.bind(this)
    }

    componentWillMount() {
        this.setState(({
            heart: this.props.userFollowing
        }))
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
        if (this.props.data != null && this.props.data.platform == 'twitter' ) {
            const styles = {
                backgroundImage: 'url(' + this.props.data.tweet_media[0] + ')'
            }
            return (
                <div
                    className='popular-component-wrapper'
                    style={styles}
                    data-state={this.state.open ? 'open' : 'closed'}
                    onClick={this.onClick}
                >
                    <PopularComponentClosedView
                        backgroundImage={this.props.data.tweet_media}
                        userProfileImageUrl={this.props.data.user_profile_image_url}
                        url={this.props.data.tweet_url}
                        changeHeart={this.changeHeart}
                        caption={this.props.data.tweet_text}
                        heart={this.state.heart}
                        influencerId={this.props.data.realInfluencerName}
                        icon={<FontAwesomeIcon icon={['fab', 'twitter']} />}
                        platform={this.props.data.platform}
                    />
                    <PopularComponentExpandedView
                        userProfileImageUrl={this.props.data.user_profile_image_url}
                        userName={this.props.data.user_name}
                        userVerified={this.props.data.user_verified}
                        url={this.props.data.tweet_url}
                        caption={this.props.data.tweet_text}
                        img={this.props.data.tweet_media[0]}
                        noOfLikes={this.props.data.tweet_favorite_count}
                        noOfRetweet={this.props.data.tweet_retweet_count}
                        timestamp={this.props.data.tweet_created_at}
                        changeHeart={this.changeHeart}
                        icon={<FontAwesomeIcon icon={['fab', 'twitter']} />}
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

export default PopularComponent
