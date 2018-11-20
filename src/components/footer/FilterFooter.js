import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FilterFooter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            twitter: true,
            instagram: true,
            youtube: true
        }

        this.changeTwitter = this.changeTwitter.bind(this)
        this.changeInstagram = this.changeInstagram.bind(this)
        this.changeYoutube = this.changeYoutube.bind(this)
        this.updateFilter = this.updateFilter.bind(this)
    }

    updateFilter() {
        let newFilters = []
        Object.entries(this.state).map(([key, value]) => value ? newFilters.push(key) : '')
        this.props.updateFeedFilters(newFilters)
    }

    changeTwitter() {
        this.setState(prevState => ({
            twitter: !prevState.twitter
        }), () => this.updateFilter())
    }

    changeInstagram() {
        this.setState(prevState => ({
            instagram: !prevState.instagram
        }), () => this.updateFilter())
    }

    changeYoutube() {
        this.setState(prevState => ({
            youtube: !prevState.youtube
        }), () => this.updateFilter())
    }

    render() {
        if (this.props.showFilter) {
            return (
                <div className="filter">
                    <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        className="item"
                        onClick={this.changeTwitter}
                        data-state={this.state.twitter && 'active'}
                    />
                    <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        className="item"
                        onClick={this.changeInstagram}
                        data-state={this.state.instagram && 'active'}
                    />
                    <FontAwesomeIcon
                        icon={['fab', 'youtube']}
                        className="item"
                        onClick={this.changeYoutube}
                        data-state={this.state.youtube && 'active'}
                    />
                </div>
            )
        } else {
            return null
        }
    }
}

export default FilterFooter
