import React, { Component } from 'react';
import '../css/SuggestionBody.css';
import logo from '../img/logo2.png'
import ReactStars from 'react-stars'

class SuggestionBody extends Component {

  ratingChanged = () => {
    console.log('rating changed');
  }

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
              <h3 className="restaurant-name">مطعم الشرق الاوسط</h3>
              <div className="rating">
                <ReactStars
                  id="stars"
                  count={5}
                  size={20}
                  edit={false}
                  color2={'#ffd700'}
                  value={4.5}
                />
                <h5 className="rating-value">8.9/10</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestionBody;