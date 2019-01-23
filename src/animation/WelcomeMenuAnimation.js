import anime from 'animejs';

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

  static startAnimation () {
    let welcomeMenuAnimation = anime.timeline();
    welcomeMenuAnimation
      .add({
        delay: 200,
        targets: '.welcomeMenu',
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
}