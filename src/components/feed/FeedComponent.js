import React from 'react'
import { followInfluencer, unfollowInfluencer } from '../functions/followAndUnfollowInfluencer'
import FeedComponentHeader from './components/FeedComponentHeader'
import FeedComponentContent from './components/FeedComponentContent'
import FeedComponentMeta from './components/FeedComponentMeta'

class FeedComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heart: true
        }

        this.changeHeart = this.changeHeart.bind(this)
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
            return (
                <div className='feed-component-wrapper'>
                    <FeedComponentHeader
                        inflImgUrl={this.props.data.userProfileImageUrl || this.props.data.video_thumbnail_url}
                        inflId={this.props.data.influencerId}
                        inflName={this.props.data.channel_title || this.props.data.userName}
                        contentUrl={this.props.data.tweetUrl || this.props.data.postUrl || this.props.data.video_url}
                        platform={this.props.data.platform.toLowerCase()}
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
                <div className="mobile-page">
                    <Header />
                    <main className='feed'>
                        <h2>Nothing here to show, please follow a influencer...</h2>
                    </main>
                    <Footer showFilter='true' />
                </div>

            )
        }
  }
}
export default FeedComponent
