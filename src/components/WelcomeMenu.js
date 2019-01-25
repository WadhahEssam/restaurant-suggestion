import React, { Component } from 'react';
import axios from 'axios';
import { cloneDeep } from 'lowdash';
import Platform from 'react-platform-js'
import logo from '../img/logo.png';
import WelcomeMenuAnimation from '../animation/WelcomeMenuAnimation';
import playStoreIcon from '../img/play-store-icon.svg';
import appStoreIcon from '../img/app-store-icon.svg';
import loadingIcon from '../img/loading-icon.svg';
import successIcon from '../img/success-icon.svg';
import poweredByFoursquare from '../img/powered-by-foursquare.png';
import '../css/WelcomeMenu.css';

class WelcomeMenu extends Component {
  state = {
    loading: false,
    isFetched: false,
    currentLocation: null,
  }

  componentDidMount() {
    WelcomeMenuAnimation.startAnimation();
  }

  getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({currentLocation: {latitude: position.coords.latitude, longitude: position.coords.longitude}})
      }, function() {});
    } else {
      // Browser doesn't support Geolocation
    }
  }

  onClickSuggestButton = async () => {
    this.setState({loading: true});
    WelcomeMenuAnimation.loadingAnimation();
    // let restaurant = await axios.get('https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g et_param=value');
    let restaurant = await axios
    .post(`https://fadfadah.net/wainnakel/getInformation`, 
    { 
      lat: this.state.currentLocation.latitude,
      long: this.state.currentLocation.longitude
    });
    console.log('this is coming from my server');
    this.setState({isFetched: true});
    this.props.setState({restaurant: restaurant.data});
    WelcomeMenuAnimation.hideAnimation();
  }

  renderSuggestButtonContent = () => {
    if (this.state.currentLocation === null) {
      return(<p className="suggest-button-allow-location">قم بالسماح بمشاركة بالموقع</p>);
    }
    else if (this.state.isFetched === true) {
      return(<img src={successIcon} className="success-icon" alt="success icon" />)
    }
    else if (this.state.loading === false) {
      return(<p className="suggest-button-text">إقتراح</p>);
    } 
    else if (this.state.loading === true) {
      return(<img src={loadingIcon} className="loading-icon" alt="loading icoin" />);
    } 
  }

  render() {
    if (this.state.currentLocation == null) {
      this.getCurrentLocation();
    }
    console.log(this.state);
    if (Platform.DeviceType == 'mobile') {
      console.log('this is a mobile');
    } else { 
      console.log('this is not a mobile');
    }
    return(
      <div style={{display: 'block'}} className="welcome-menu">
        <img src={logo} className="logo" alt="logo" />
        <button onClick={this.onClickSuggestButton} disabled={(this.state.currentLocation==null)} className="suggest-button">
          {this.renderSuggestButtonContent()}
        </button>
        <div className="extra-info">
          <div className="download-application-links">
            <a href="https://play.google.com/store/apps/details?id=com.wainnakel.android" className="store-icon-div play-store-icon">
              <img src={playStoreIcon} className="store-icon" alt="play store" />
            </a>
            <a href="https://itunes.apple.com/sa/app/wyn-nakl/id718380069?mt=8" className="store-icon-div app-store-icon">
              <img src={appStoreIcon} className="store-icon" alt="app store" />
            </a>
          </div>
          <div className="rights"><p>2019 © جميع الحقوق محفوظة</p></div>
          <div className="foursquare">
            <img src={poweredByFoursquare} className="foursquare-icon" alt="powered by foursquare" />
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeMenu;