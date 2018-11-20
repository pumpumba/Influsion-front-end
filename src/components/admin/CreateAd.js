import React from 'react'
import CreateAdInputForm from './CreateAdInputForm'

class CreateAd extends React.Component {
  constructor(){
    super();
    }



  render(){
    return(
      <div>
        <h1 className="create-ad-title"> Create advertisment here </h1>
        <CreateAdInputForm/>
      </div>
    );
  }
}
export default CreateAd;
