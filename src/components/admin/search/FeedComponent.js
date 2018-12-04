import React from 'react'
import FeedComponentHeader from './../../../components/feed/components/FeedComponentHeader'
import FeedComponentContent from './../../../components/feed/components/FeedComponentContent'
import FeedComponentMeta from './FeedComponentMeta'

class FeedComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heart: true
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
                        postId={this.props.data.tweetId || this.props.data.postId || this.props.data.video_id}
                    />
                </div>
            )
        } else {
            return (
                <div className="mobile-page">
                    <main className='feed'>
                    </main>
                </div>
            )
        }
    }
}
export default FeedComponent
