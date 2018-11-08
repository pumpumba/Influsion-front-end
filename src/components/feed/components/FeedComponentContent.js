import React from 'react'

const FeedComponentContent = (props) => {

    return (
        <div className='content'>
            <p>{props.caption}</p>
            <img src={props.imageUrl} />
        </div>
    )
}
export default FeedComponentContent
