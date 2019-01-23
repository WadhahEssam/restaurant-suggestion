import React, { Component } from 'react';
import Platform from 'react-platform-js'
import logo from '../img/logo.png';
import playStoreIcon from '../img/play-store-icon.svg';
import appStoreIcon from '../img/app-store-icon.svg';
import loadingIcon from '../img/loading-icon.svg';
import poweredByFoursquare from '../img/powered-by-foursquare.png';
import '../css/WelcomeMenu.css';
import anime from 'animejs';

class WelcomeMenu extends Component {
  state = {
    loading: false,
  }

  componentDidMount() {
    this.startAnimation();
  }

  onClickSuggestButton = () => {
    this.loadingAnimation();
    this.setState({loading: true});
  }

  render() {
    if (Platform.DeviceType == 'mobile') {
      console.log('this is a mobile');
    } else { 
      console.log('this is not a mobile');
    }
    return(
      <div className="welcomeMenu">
        <img src={logo} className="logo" alt="logo" />
        <button onClick={this.onClickSuggestButton} className="suggest-button">
          {
            (this.state.loading === false) ? 
            <p className="suggest-button-text">إقتراح</p> :
            <img src={loadingIcon} className="loading-icon" alt="app store" />
          }
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

  // Animation Section
  cssAfterAnimation = {
    welcomeMenu: {
      opacity: 0.9,
    },
    logo: {
      opacity: 0.9,
      top: '25px',
      height: '46%',
    },
    suggestButton: {
      opacity: 0.8,
      top: '8%',
    },
    extraInfo: {
      opacity: 1,
    }
  }

  startAnimation = () => {
    let welcomeMenuAnimation = anime.timeline();
    welcomeMenuAnimation
      .add({
        delay: 200,
        targets: '.welcomeMenu',
        easing: 'easeInOutSine',
        duration: 300,
        opacity: this.cssAfterAnimation.welcomeMenu.opacity,
      })
      .add({
        delay: 250,
        targets: '.logo',
        easing: 'easeInOutSine',
        duration: 500,
        opacity: this.cssAfterAnimation.logo.opacity,
        height: this.cssAfterAnimation.logo.height,
        top: this.cssAfterAnimation.logo.top,
      })
      .add({
        delay: 0,
        targets: '.suggest-button',
        easing: 'easeInOutSine',
        duration: 500,
        opacity: this.cssAfterAnimation.suggestButton.opacity,
        top: this.cssAfterAnimation.suggestButton.top,
      })
      .add({
        delay: 0,
        targets: '.extra-info',
        easing: 'easeInOutSine',
        duration: 300,
        opacity: this.cssAfterAnimation.extraInfo.opacity,
      })
  }

  loadingAnimation = () => {
    let loadingAnimation = anime.timeline();
    loadingAnimation
      .add({
        delay: 0,
        targets: '.suggest-button',
        easing: 'easeInOutSine',
        duration: 300,
        width: 70,
      })
  }
}

export default WelcomeMenu;