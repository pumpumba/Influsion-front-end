import React from 'react'
import SearchSuggestions from './SearchSuggestions'
import Feed from './InfluencerFeed'
import './../../../styles/admin/search.scss'


class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inflid: this.props.inflid
        }
        this.getId = this.getId.bind(this)
    }

    getId(val){
        this.setState({inflid: val})
    }

    componentDidUpdate(oldProps) {
        const newProps = this.props
        if(oldProps.inflid !== newProps.inflid) {
          this.setState({inflid:newProps.inflid})
        }
      }

    render() {
        return (
            <div>
                <main className='admin-search-content'>
                    <SearchSuggestions inflid={this.state.inflid} sendId={this.getId}/>
                    <div className='admin-influencer-feed'>
                        <Feed inflid={this.state.inflid}/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Search
