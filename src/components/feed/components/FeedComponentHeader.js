import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FeedComponentHeader = (props) => {
    if(props.isAd){
        return(
            <div className='header'>
                <h1>Advertisement</h1>
            </div>
        )
    }
    else if(props.inflFeed){
        return (
            <div className='header'>
                <img src={props.inflImgUrl} />
                <a> {props.inflName} </a>
                <a target_="blank" href={props.contentUrl} className="twitter-icon"><FontAwesomeIcon className='icon' icon={['fab', `${props.platform}`]} /></a>
            </div>
        )
    }else{
        return (
            <div className='header'>
                <img src={props.inflImgUrl} />
                <a href={`/infl/${props.inflId}`}> {props.inflName} </a>
                <a target_="blank" href={props.contentUrl} className="twitter-icon"><FontAwesomeIcon className='icon' icon={['fab', `${props.platform}`]} /></a>
            </div>
        )
    }
}
export default FeedComponentHeader
