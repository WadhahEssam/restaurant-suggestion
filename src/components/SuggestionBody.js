import React, { Component } from 'react';
import '../css/SuggestionBody.css';
import logo from '../img/logo2.png'

class SuggestionBody extends Component {
  render() {
    return(
      <div>
        <div className="suggestion-body">
          <img src={logo} className="logo2" alt="logo" />
          <div className="restaurant-information-section">
            <div className="restaurant-image-div">
              <img 
                className="restaurant-image" 
                src="https://fastly.4sqi.net/img/general/250x250/S3-CpgqcZwo5as6W1fmYsMqVVjQdTnRgPeDbnhnEnRE.jpg"
              />
            </div>
            <div className="restaurant-main-information">
              <h3 className="restaurant-name">مطعم أبو نواس</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestionBody;