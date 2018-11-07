import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StopPropagation } from 'react-clickable';

class PopularComponentHeader extends React.Component {
    render() {
        return (
            <div className='closed-view'>
                <div className='header'>
                    <img src={this.props.userProfileImageUrl} />
                </div>
                <StopPropagation>
                    <a href={this.props.url}> <FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
                    <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={this.props.changeHeart} data-state={this.props.heart && 'active'} />
                </StopPropagation>
                {(this.props.backgroundImage <= 0) ? <div className='text-wrapper'> <p className='caption'>{this.props.caption}</p> </div> : ''}
            </div>
        )
    }
}

export default PopularComponentHeader
