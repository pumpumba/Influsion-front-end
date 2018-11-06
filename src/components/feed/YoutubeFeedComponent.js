import React from 'react'
import TimeAgo from 'react-timeago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const YoutubeFeedComponent = (props) => {
  return (
      <div className='feed-component-wrapper'>
        <div className='header'>

            <h3>{props.data.user}</h3>
            <a target_="blank" href={props.data.url}> <FontAwesomeIcon className='icon' icon={['fab','youtube']} /></a>
        </div>
          <div className='youtube-content content'>
              <iframe className="videoFrame" allow="fullscreen" src={props.data.url}> </iframe>
          </div>
          <div className='meta-data'>
            <p><FontAwesomeIcon className='icon' icon={['fas','eye']} /> {props.data.views}</p>
            <p><FontAwesomeIcon className='icon' icon={['fas','thumbs-up']} /> {props.data.likes}</p>
            <p><FontAwesomeIcon className='icon' icon={['fas','thumbs-down']} /> {props.data.dislikes}</p>
          </div>
      </div>
  )
}
export default YoutubeFeedComponent
