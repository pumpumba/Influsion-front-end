import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'


const FeedComponentHeader = (props) => {
    if(props.inflFeed){
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
                <NavLink to={`/infl/${props.inflId}`}> {props.inflName} </NavLink>
                <a target_="blank" href={props.contentUrl} className="twitter-icon"><FontAwesomeIcon className='icon' icon={['fab', `${props.platform}`]} /></a>
            </div>
        )
    }

}
export default FeedComponentHeader
