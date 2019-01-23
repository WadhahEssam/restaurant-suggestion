import React, { Component } from 'react';
import logo from '../img/logo.png';
import playStoreIcon from '../img/play-store-icon.svg';
import appStoreIcon from '../img/app-store-icon.svg';
import '../css/WelcomeMenu.css';
import anime from 'animejs';
import Platform from 'react-platform-js'

class WelcomeMenu extends Component {
  componentDidMount() {
    this.startAnimation();
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
        <button className="suggest-button"><p className="suggest-button-text">إقتراح</p></button>
        <div className="extra-info">
          <div className="download-application-links">
            <div className="store-icon-div play-store-icon">
              <img src={playStoreIcon} className="store-icon" alt="play store" />
            </div>
            <div className="store-icon-div app-store-icon">
              <img src={appStoreIcon} className="store-icon" alt="app store" />
            </div>
          </div>
          <div className="rights"><p>2019 © جميع الحقوق محفوظة</p></div>
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
    var welcomeMenuAnimation = anime.timeline();
    welcomeMenuAnimation
      .add({
        delay: 500,
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
}

export default WelcomeMenu;