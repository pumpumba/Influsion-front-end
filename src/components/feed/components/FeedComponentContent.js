import React from 'react'
import {BACKEND_URL} from './../../../constants'

class FeedComponentContent extends React.Component {
    constructor(props) {
        super(props)
        this.addAdClick = this.addAdClick.bind(this)
        this.renderImage = this.renderImage.bind(this)
    }

    renderImage(curImageUrl) {
        if(curImageUrl !== undefined){
        return curImageUrl[0] ?
            (curImageUrl[0].includes("mp4") ?
                <div className='instagram-video-container'>
                    <video
                        controls
                        autoPlay={false}
                        width="100%"
                        allowFullScreen={true}
                        src={curImageUrl[0]}>
                    </video>
                </div>
                : <img src={curImageUrl[0]} />)
            : ''
        }
    }

    renderVideo(curVideoUrl) {
        return curVideoUrl ?
            <div className='youtube-video-container'>
                <iframe allow="fullscreen" src={curVideoUrl}></iframe>
            </div>
            : ''
    }

    addAdClick(e) {
      console.log(this)
        e.preventDefault()
        fetch(BACKEND_URL + 'db/add_ad_click/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user_id: this.props.userId, ad_id: this.props.isAd})
        })
    }

    render() {
        if(this.props.isAd){
            return (
                <div className='content'>
                    <p>{this.props.caption}</p>
                    <img src={this.props.imageUrl} />
                    <p>{this.props.textdescription}</p>
                    <a href={this.props.readMoreUrl} className='read-more' onClick={this.addAdClick} target='_blank'>Read more</a>
                </div>
            )
        }
        return (
            <div className='content'>
                <p>{this.props.caption}</p>
                {this.renderImage(this.props.imageUrl)}
                {this.renderVideo(this.props.videoUrl)}
                <p>{this.props.textdescription}</p>
            </div>
        )
    }
}

export default FeedComponentContent
