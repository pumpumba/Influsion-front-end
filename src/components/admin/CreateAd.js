import React from 'react'

class CreateAd extends React.Component {
  constructor(){
    super();
    this.state = {
      adUsername: "",
      adText:"",
      imageUrl: "",
      imageVisible: false
    }
  }

  onInsertOfPicture (picUrl) {
    this.setState({imageUrl: this.picUrl}, () => {
      this.setState({imageVisible:true})
    });
  }



  render(){
    return(
      <div>
        <h1> Create advertisment here </h1>

        <div className="create-ad-container">
          <form className="input-form-container">
          <input
          className="ad-username"
          type="text"
          placeholder="Put the username for the ad here"
          min="0"
          max="20"
          onChange = {(e) => this.setState({ adUsername: e.target.value })}
          />
          <div className="ad-picture-container">
          <input
          className="ad-picture-input"
          type="text"
          placeholder="Put optional picture here"
          onChange={(e) => this.setState({ imageUrl: e.target.value })}
          />
          <img className="pictureForAd"src={this.state.imageUrl}/>
          </div>

          <textarea
          className="ad-content-text"
          type="textarea"
          placeholder="Put content text here"
          onChange={(e) => this.setState({ adText: e.target.value })}
          />

          <button className="submitAdButton" >
            Submit Ad
          </button>
          </form>
        </div>
      </div>
    );
  }
}
export default CreateAd;
