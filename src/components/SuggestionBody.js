import React, { Component } from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import { cloneDeep } from 'lodash';
import RestaurantBasicInformation from '../components/ResturantBasicInformation';
import '../css/SuggestionBody.css';
import logo from '../img/logo2.png';
import mapPin from '../img/map-pin.png';
import foursquareLogo from '../img/foursquare-logo.png';
import googleMapsLogo from '../img/google-maps-logo.png';

class SuggestionBody extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 0,
      longitude: 0,
      zoom: 15
    },
    currentPin: {
      latitude: 0,
      longitude: 0,
    }
  };

  componentDidUpdate() {
    if (this.props.restaurant != null && this.state.viewport.latitude == 0) {
      let viewport = cloneDeep(this.state.viewport);
      viewport.latitude = parseFloat(this.props.restaurant.lat);
      viewport.longitude = parseFloat(this.props.restaurant.lon);

      let currentPin = cloneDeep(this.state.viewport);
      currentPin.latitude = parseFloat(this.props.restaurant.lat);
      currentPin.longitude = parseFloat(this.props.restaurant.lon);
      this.setState({viewport, currentPin});
    }
  }

  render() {
    if (this.props.restaurant != null) {
      return(
        <div>
          <div className="suggestion-body">
            <a href="">
              <img src={logo} className="logo2" alt="logo" />
            </a>
            <div className="restaurant-information-section">
              <div className="restaurant-image-div">
                <img 
                  className="restaurant-image" 
                  src={this.props.restaurant.image[0]}
                />
              </div>
              <RestaurantBasicInformation restaurant={this.props.restaurant}/>
              <div className="links-div">
                <a href="google.com">                
                  <img src={googleMapsLogo} className="google-maps-logo link-logo"/>
                </a>
                <a href="foursquare.com">
                  <img src={foursquareLogo} className="foursquare-logo link-logo"/>
                </a>
                <div className="box-shadow-div-left" />
                <div className="box-shadow-div-right" />
              </div>
              <div className="map-div">
                <MapGL
                  {...this.state.viewport}
                  mapboxApiAccessToken = "pk.eyJ1Ijoid2FkYWhlc2FtMjEiLCJhIjoiY2pyODJhMDhjMDI2ZTQzb2RkNjgxMHY0diJ9.W9cODURNmVYUekoS1b2LkQ"
                  onViewportChange={(viewport) => this.setState({viewport})}
                >
                  <Marker latitude={this.state.currentPin.latitude} longitude={this.state.currentPin.longitude}>
                    <img 
                      className="map-pin" 
                      src={mapPin}
                    />
                  </Marker>
                </MapGL>
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