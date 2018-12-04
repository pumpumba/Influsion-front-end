import React from 'react'
import PopularComponentClosedView from './popularSubComponents/PopularComponentClosedView'
import PopularComponentExpandedView from './popularSubComponents/PopularComponentExpandedView'
import { followInfluencer, unfollowInfluencer } from '../functions/followAndUnfollowInfluencer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BACKEND_URL} from './../../constants'


class PopularComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            typeOfVisit: '',
            open: false,
            heart: false,
            isInstagramVideo: false
        }

        this.addUserVisit = this.addUserVisit.bind(this)
        this.onClick = this.onClick.bind(this)
        this.changeHeart = this.changeHeart.bind(this)

    }

    addUserVisit(e) {
        if (this.props.data.platform === "twitter") {
          this.state.typeOfVisit = "twitterpost"
        } else if (this.props.data.platform === "Youtube") {
          this.state.typeOfVisit = "youtubevideo"
        } else if (this.props.data.platform === "instagram") {
          this.state.typeOfVisit = "instagrampost"
        }
        e.preventDefault()
        fetch(BACKEND_URL + 'db/add_user_visit/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({influencer_id: this.props.data.influencerId, user_id: this.props.userId,
                                  type_of_visit: this.state.typeOfVisit})
        })
    }

    componentWillMount() {
        this.setState(({
            heart: this.props.userFollowing
        }))
    }

    onClick(e) {
        this.setState(prevState => ({
            open: !prevState.open
        }))

        if (this.state.open) {
          this.addUserVisit(e)
        }

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
        let styles = null
        let backgroundUrl = ['']
        if(this.props.data.adid){
            styles = {
                backgroundImage: 'url(' + this.props.data.imgurl[0] + ')'
            }
            if (this.props.imgurl === 'undefined'){
                backgroundUrl = '../../../img/404Jonas-7a6e7fcf.png'
            }else{
                backgroundUrl = this.props.data.imgurl
            }
            return (
                <div
                    className='popular-component-wrapper'
                    style={styles}
                    data-state={this.state.open ? 'open' : 'closed'}
                    onClick={this.onClick}
                >
                    <PopularComponentClosedView
                        imgurl={backgroundUrl}
                        caption={this.props.data.textdescription}
                        isAd='true'
                    />
                    {this.state.open &&
                        <PopularComponentExpandedView
                            imgurl={backgroundUrl}
                            userName='Advertisement'
                            readmoreurl={this.props.data.readmoreurl}
                            caption={this.props.data.textdescription}
                            isAd='true'
                        />
                    }
                    <div className='blur-overlay'></div>
                </div>
            )
        }
        else if (this.props.data != null && this.props.data.tweetText != "") {

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

            let isInstagramVideo = false

            if (this.props.data.postMedia) {
                if (this.props.data.postMedia[0].includes("mp4")) {
                    isInstagramVideo = true
                    styles = {
                        backgroundImage: `url(${this.props.data.userProfileImageUrl})`
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
                        userProfileImageUrl={this.props.data.video_thumbnail_url || this.props.data.userProfileImageUrl || this.props.data.imgurl}
                        url={this.props.data.tweetUrl || this.props.data.postUrl || this.props.data.video_url || this.props.data.imgurl}
                        changeHeart={this.changeHeart}
                        caption={this.props.data.tweetText || this.props.data.postText || this.props.data.textdescription}
                        heart={this.state.heart}
                        platform={this.props.data.platform}
                        influencerId={this.props.data.influencerId}
                        isInstagramVideo={isInstagramVideo}
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
