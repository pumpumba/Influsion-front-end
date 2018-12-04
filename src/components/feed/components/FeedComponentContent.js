import React from 'react'

class FeedComponentContent extends React.Component {
    constructor(props) {
        super(props)
        this.renderImage = this.renderImage.bind(this)
        this.openAd = this.openAd.bind(this)
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

    openAd(){
        window.open(this.props.readmoreurl)
    }

    render() {
        if(this.props.isAd){
            return (
                <div className='content'>
                    <p>{this.props.caption}</p>
                    <img src={this.props.imageUrl} />
                    <p>{this.props.textdescription}</p>
                    <button className='read-more' onClick={this.openAd}>Read more</button>
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
