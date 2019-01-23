import anime from 'animejs';
import SuggestionScreenAnimation from '../animation/SuggestionScreenAnimation';

let cssAfterAnimation = {
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

export default class WelcomeMenuAnimation {
  static loadingAnimation() {
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

  static startAnimation() {
    let welcomeMenuAnimation = anime.timeline();
    welcomeMenuAnimation
      .add({
        delay: 200,
        targets: '.welcome-menu',
        easing: 'easeInOutSine',
        duration: 300,
        opacity: cssAfterAnimation.welcomeMenu.opacity,
      })
      .add({
        delay: 250,
        targets: '.logo',
        easing: 'easeInOutSine',
        duration: 500,
        opacity: cssAfterAnimation.logo.opacity,
        height: cssAfterAnimation.logo.height,
        top: cssAfterAnimation.logo.top,
      })
      .add({
        delay: 0,
        targets: '.suggest-button',
        easing: 'easeInOutSine',
        duration: 500,
        opacity: cssAfterAnimation.suggestButton.opacity,
        top: cssAfterAnimation.suggestButton.top,
      })
      .add({
        delay: 0,
        targets: '.extra-info',
        easing: 'easeInOutSine',
        duration: 300,
        opacity: cssAfterAnimation.extraInfo.opacity,
      })
  }

  static hideAnimation() {
    let hideAnimation = anime.timeline();
    hideAnimation
      .add({
        delay: 500,
        targets: '.rights, .foursquare, .download-application-links, .logo, .suggest-button',
        duration: 500,
        opacity: 0
      })
      .add({
        delay: 0,
        targets: '.welcome-menu',
        easing: 'easeInOutSine',
        duration: 700,
        width: 0,
        height: 0,
        top: '-1000px',
      })
    SuggestionScreenAnimation.showSuggestionScreen();

  }
}