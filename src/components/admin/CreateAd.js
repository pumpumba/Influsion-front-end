import React from 'react'
import CreateAdInputForm from './CreateAdInputForm'

class CreateAd extends React.Component {
  constructor(){
    super();
    }



  render(){

    return(
      <div className='admin-box'>
        <h1 className='section-title'> Create new advertisment here </h1>
        <CreateAdInputForm/>
      </div>
    );
  }
}
export default CreateAd;
