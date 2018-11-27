import React from 'react'
import PropTypes from 'prop-types'
import BlockedListComponent from './BlockedListComponent'


class ListOfBlocked extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: Array(9).fill(false),
      lastActive: null,
    }

  }

  handleClick(i) {
    const ar = this.state.isActive.slice()
    ar[i] = !ar[i]
    if (i != this.state.lastActive) {
      ar[this.state.lastActive] = false
    }
    this.setState({ isActive: ar })
    this.setState({ lastActive: i })
  }

  render() {
    return (
      <div className='blocked-box'>
        <h1 className="section-title"> Currently Blocked Influencers</h1>
        <BlockedListComponent influencerName="Pumbaaaaa" index="1" />
        <BlockedListComponent influencerName="Rita" index="2" />
        <BlockedListComponent influencerName="PewdiePie" index="3" />
        <BlockedListComponent influencerName="Ellen DG" index="4"  />
        <BlockedListComponent influencerName="POTUS" index="5" />
        <BlockedListComponent influencerName="Bill Gates" index="6"/>
        <BlockedListComponent influencerName="Casey Niestat" index="7" />
        <BlockedListComponent influencerName="Lady Gaga" index="8" />
        <BlockedListComponent influencerName="Jolina Olaussen" index="9"/>
        <BlockedListComponent influencerName="Jonas Olaussen" index="10" />
      </div>


    );
  }
}

export default ListOfBlocked;
