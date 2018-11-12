import React from 'react'

class FeedComponentContent extends React.Component {
    constructor(props) {
        super(props)
        this.renderImage = this.renderImage.bind(this)
    }

    renderImage(curImageUrl) {
        return curImageUrl ? <img src={curImageUrl} /> : ''
    }

    renderVideo(curVideoUrl) {
        return curVideoUrl ?
                <div className='youtube-video-container'>
                    <iframe allow="fullscreen" src={curVideoUrl}></iframe>
                </div>
                : ''
    }

    render() {
        return (
            <div className='content'>
                <p>{this.props.caption}</p>
                {this.renderImage(this.props.imageUrl)}
                {this.renderVideo(this.props.videoUrl)}
            </div>
        )
    }
}

export default FeedComponentContent