import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StopPropagation } from 'react-clickable'

class PopularComponentHeader extends React.Component {
    render() {

        if (this.props.isAd) {
            return (
                <div className='closed-view'>
                    <div className='header'>
                        <FontAwesomeIcon icon={['fas', 'ad']} />
                    </div>
                    <img src={this.props.imgurl} />
                </div>
            )
        } else {
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
                            {this.props.isPromoted ?
                                <FontAwesomeIcon icon={['fas', 'ad']} />
                                :
                                <FontAwesomeIcon icon={['fab', `${this.props.platform.toLowerCase()}`]} />
                            }
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
