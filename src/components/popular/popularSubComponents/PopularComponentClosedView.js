import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StopPropagation } from 'react-clickable'

class PopularComponentHeader extends React.Component {
    render() {

        if(this.props.isAd){
            return(
                <div className='closed-view'>
                    <div className='header'>
                        <p>Advertisement<br></br></p>
                    </div>
                        <img src={this.props.imgurl} />
                </div>
            )
        }else{
            return (
                <div className='closed-view'>
                    <div className='header'>
                        <img src={this.props.userProfileImageUrl} />
                    </div>
                    {this.props.isInstagramVideo &&
                        <div className='play-icon-wrapper'>
                            <FontAwesomeIcon icon={'play'} />
                        </div>
                    }
                    <StopPropagation>
                        <a href={this.props.url}>
                            <FontAwesomeIcon icon={['fab', `${this.props.platform.toLowerCase()}`]} />
                        </a>
                        <FontAwesomeIcon
                            icon={'heart'}
                            className="follow_heart"
                            onClick={this.props.changeHeart}
                            data-state={this.props.heart && 'active'}
                        />
                    </StopPropagation>
                    {(this.props.backgroundImage <= 0) ? <div className='text-wrapper'> <p className='caption'>{this.props.caption}</p> </div> : ''}
                </div>
            )
        }
    }
}

export default PopularComponentHeader
