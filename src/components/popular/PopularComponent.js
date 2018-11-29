import React from 'react'
import PopularComponentClosedView from './popularSubComponents/PopularComponentClosedView'
import PopularComponentExpandedView from './popularSubComponents/PopularComponentExpandedView'
import { followInfluencer, unfollowInfluencer } from '../functions/followAndUnfollowInfluencer'
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
            unfollowInfluencer(this.props.userId, this.props.data.influencerId)
        } else {
            followInfluencer(this.props.userId, this.props.data.influencerId)
        }
    }

    render() {
        if (this.props.data != null) {

            let backgroundUrl = ['']
            backgroundUrl = this.props.data.tweetMedia ? this.props.data.tweetMedia : this.props.data.postMedia

            if (this.props.data.platform.toLowerCase() == 'youtube') {
                let imageArr = []
                imageArr.push(this.props.data.video_thumbnail_url)
                backgroundUrl = imageArr
            }

            let styles = null
            if (backgroundUrl && !this.props.data.postMedia) {
                styles = {
                    backgroundImage: 'url(' + backgroundUrl[0] + ')'
                }
            }

            if (this.props.data.postMedia) {
                if (this.props.data.postMedia[0].includes("mp4")) {
                    styles = {
                        backgroundImage: "url('https://image.shutterstock.com/mosaic_250/0/0/1024284199.jpg')"
                    }
                } else {
                    styles = {
                        backgroundImage: 'url(' + backgroundUrl[0] + ')'
                    }
                }
            }
            return (
                <div
                    className='popular-component-wrapper'
                    style={styles}
                    data-state={this.state.open ? 'open' : 'closed'}
                    onClick={this.onClick}
                >
                    <PopularComponentClosedView
                        backgroundImage={backgroundUrl}
                        userProfileImageUrl={this.props.data.video_thumbnail_url || this.props.data.userProfileImageUrl}
                        url={this.props.data.tweetUrl || this.props.data.postUrl || this.props.data.video_url}
                        changeHeart={this.changeHeart}
                        caption={this.props.data.tweetText || this.props.data.postText}
                        heart={this.state.heart}
                        platform={this.props.data.platform}
                        influencerId={this.props.data.influencerId}
                    />
                    {this.state.open &&
                        <PopularComponentExpandedView
                            userProfileImageUrl={this.props.data.video_thumbnail_url || this.props.data.userProfileImageUrl}
                            userName={this.props.data.channel_title || this.props.data.userName}
                            userVerified={this.props.data.userVerified}
                            url={this.props.data.tweetUrl || this.props.data.postUrl || this.props.data.video_url}
                            caption={this.props.data.tweetText || this.props.data.postText || this.props.data.video_description}
                            videoUrl={this.props.data.video_embeded_url}
                            img={backgroundUrl}
                            noOfLikes={this.props.data.tweetFavoriteCount || this.props.data.postLikeCount || this.props.data.video_like_count}
                            noOfRetweet={this.props.data.tweetRetweetCount}
                            noOfComments={this.props.data.video_comment_count}
                            noOfViews={this.props.data.video_view_count}
                            timestamp={this.props.data.tweetCreatedAt || this.props.data.postCreatedAt || this.props.data.video_created_at}
                            changeHeart={this.changeHeart}
                            platform={this.props.data.platform}
                            heart={this.state.heart}
                            influencerId={this.props.data.influencerId}
                        />
                    }
                    <div className='blur-overlay'></div>
                </div>
            )
        } else return null
    }
}

export default PopularComponent
