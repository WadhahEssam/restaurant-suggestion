import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import RestaurantBasicInformation from '../components/ResturantBasicInformation';
import '../css/SuggestionBody.css';
import logo from '../img/logo2.png'

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

  render() {
    if (this.props.restaurant != null) {
      return(
        <div>
          <div className="suggestion-body">
            <img src={logo} className="logo2" alt="logo" />
            <div className="restaurant-information-section">
              <div className="restaurant-image-div">
                <img 
                  className="restaurant-image" 
                  src={this.props.restaurant.image[0]}
                />
              </div>
              <RestaurantBasicInformation restaurant={this.props.restaurant}/>
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
    } else {
      return(<div/>)
    }

  }
}

export default SuggestionBody;