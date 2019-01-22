import React, { Component } from 'react';
import logo from '../img/logo.png';
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
      </div>
    );
  }

  // Animation Section
  cssAfterAnimation = {
    welcomeMenu: {
      opacity: 0.9,
    },
    logo: {
      opacity: 1,
      top: '25px',
      height: '46%',
    },
    suggestButton: {
      opacity: 0.9,
      height: '12%',
      width: '48%',
      top: '40px',
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
  }
}

export default WelcomeMenu;