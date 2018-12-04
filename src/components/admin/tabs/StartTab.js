import React from 'react'
import PropTypes from 'prop-types'
import StatisticsPlatform from './../StatisticsPlatform'
import MostClicked from './../10MostClicked'
import MostFollowed from './../10MostFollowed'


class StartTab extends React.Component {
  render () {
    return(
    <div className="start-tab-content">
      <StatisticsPlatform/>
      <MostClicked/>
      <MostFollowed/>
    </div>
    )
  }
}

export default StartTab;
