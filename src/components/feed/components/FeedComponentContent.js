import React from 'react'

const FeedComponentContent = (props) => {

    return (
        <div className='content'>
            <p>{props.caption}</p>
            <img src={props.imageUrl} />
            {props.videoUrl}
            <iframe className="videoFrame" allow="fullscreen" src={props.videoUrl}></iframe>
        </div>
    )
}
export default FeedComponentContent
