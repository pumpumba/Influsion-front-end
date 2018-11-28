import React from 'react'
import PromoteAdInputForm from './PromoteAdInputForm'

class PromoteAd extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className='admin-box'>
        <h1 className='section-title'> Promote stuff </h1>
        <PromoteAdInputForm/>
      </div>
    );
  }
}

export default PromoteAd;
