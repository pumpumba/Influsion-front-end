import React from 'react'
import PromoteAdInputForm from './PromoteAdInputForm'

class PromoteAd extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className='promote-post'>
        <h1 className='section-title'> Promote post </h1>
        <PromoteAdInputForm/>
      </div>
    );
  }
}

export default PromoteAd;
