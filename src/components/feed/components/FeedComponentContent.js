import React from 'react'

class FeedComponentContent extends React.Component {
    constructor(props) {
        super(props)
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

    render() {
        if(this.props.isAd){
            return (
                <div className='content'>
                    <p>{this.props.caption}</p>
                    <img src={this.props.imageUrl} />
                    <p>{this.props.textdescription}</p>
                    <a href={this.props.readMoreUrl} className='read-more' target='_blank'>Read more</a>
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
