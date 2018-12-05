import React from 'react'
import { followInfluencer, unfollowInfluencer } from '../functions/followAndUnfollowInfluencer'
import FeedComponentHeader from './components/FeedComponentHeader'
import FeedComponentContent from './components/FeedComponentContent'
import FeedComponentMeta from './components/FeedComponentMeta'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { NavLink } from 'react-router-dom'

class FeedComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heart: false,
            dummyTrigger: true
        }

        this.changeHeart = this.changeHeart.bind(this)
    }
    componentWillMount() {
        this.setState(({
            heart: this.props.userFollowing,
            dummyTrigger: this.props.dummyTrigger
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
        this.props.updateFeed()
    }

    render() {
        if (this.props.data != null && this.props.data.tweetText != "") {
            if(this.props.data.adid){
                return(
                    <div className='feed-component-wrapper'>
                        <FeedComponentHeader
                            imgurl={this.props.data.imgurl}
                            isAd={this.props.data.adid}
                            readMoreUrl={this.props.data.readmoreurl}
                            />
                        <FeedComponentContent
                            textdescription={this.props.data.textdescription}
                            imageUrl={this.props.data.imgurl}
                            userId={this.props.userId}
                            isAd={this.props.data.adid}
                            readMoreUrl={this.props.data.readmoreurl}
                        />
                    </div>
                )
            }

            return (
                <div className='feed-component-wrapper' data-ispromoted={this.props.isPromoted}>
                    <FeedComponentHeader
                        inflImgUrl={this.props.data.userProfileImageUrl || this.props.data.video_thumbnail_url}
                        inflId={this.props.data.influencerId}
                        inflName={this.props.data.channel_title || this.props.data.userName}
                        contentUrl={this.props.data.tweetUrl || this.props.data.postUrl || this.props.data.video_url}
                        platform={this.props.data.platform.toLowerCase()}
                        inflFeed={this.props.inflFeed}
                        inflid={this.props.inflid}
                    />
                    <FeedComponentContent
                        caption={this.props.data.tweetText ||this.props.data.postText || this.props.data.video_description}
                        imageUrl={this.props.data.tweetMedia || this.props.data.postMedia}
                        videoUrl={this.props.data.video_embeded_url}
                    />
                    <FeedComponentMeta
                        noOfLikes={this.props.data.tweetFavoriteCount || this.props.data.postLikeCount || this.props.data.video_like_count}
                        noOfRetweets={this.props.data.tweetRetweetCount}
                        timeStamp={this.props.data.tweetCreatedAt || this.props.data.postCreatedAt || this.props.data.video_created_at}
                        changeHeart={this.changeHeart}
                        heart={this.state.heart}
                    />
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
  }
}
export default FeedComponent
