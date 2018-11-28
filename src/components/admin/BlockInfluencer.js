import React from 'react'
import NavLink from 'react-router-dom/NavLink'
import BlockSuggestions from './BlockSuggestions'

class BlockInfluencer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

    render() {
        return (
              <div className="admin-block-content">
                  <h1>Block Influencer</h1>
                   Enter the name of the influencer you whish to block.
                  <BlockSuggestions />
              </div>
        )
    }
}

export default BlockInfluencer
