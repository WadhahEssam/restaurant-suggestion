import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import '../css/SuggestionBody.css';
import logo from '../img/logo2.png'
import ReactStars from 'react-stars'

class SuggestionBody extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

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
              <div className="is-open">
                <h6 className="is-open-text">مفتوح</h6>
              </div>
            </div>
            <div className="map-div">
              <ReactMapGL
                {...this.state.viewport}
                mapboxApiAccessToken = "pk.eyJ1Ijoid2FkYWhlc2FtMjEiLCJhIjoiY2pyODJhMDhjMDI2ZTQzb2RkNjgxMHY0diJ9.W9cODURNmVYUekoS1b2LkQ"
                onViewportChange={(viewport) => this.setState({viewport})}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestionBody;