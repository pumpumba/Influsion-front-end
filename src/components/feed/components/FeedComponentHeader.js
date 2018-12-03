import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FeedComponentHeader = (props) => {
    return (
        <div className='header'>
            <img src={props.inflImgUrl} />
            <a href={`/infl/${props.inflId}`}> {props.inflName} </a>
            <a target_="blank" href={props.contentUrl} className="twitter-icon"><FontAwesomeIcon className='icon' icon={['fab', `${props.platform}`]} /></a>
        </div>
    )
}
export default FeedComponentHeader
