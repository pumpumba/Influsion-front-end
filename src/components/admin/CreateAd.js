import React from 'react'
import CreateAdInputForm from './CreateAdInputForm'

class CreateAd extends React.Component {
  constructor(){
    super();
  }

  render(){

    return(
      <div className='create-ad'>
        <h1 className='section-title'> Create new advertisment </h1>
        <CreateAdInputForm/>
      </div>
    );
  }
}

export default CreateAd;
