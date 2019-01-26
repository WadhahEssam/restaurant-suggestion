import anime from 'animejs';

let cssAfterAnimation = {

}

export default class WelcomeMenuAnimation {
  static showSuggestionScreen() {
    let showSuggestionScreen = anime.timeline();
    showSuggestionScreen
      .add({
        delay: 1000,
        targets: '.suggestion-body',
        duration: 800,
        easing: 'easeInOutSine',
        opacity: 0.9,
      })

    let showFooterSection = anime.timeline();
    showFooterSection
      .add({
        delay: 1000,
        targets: '.footer-section',
        duration: 800,
        easing: 'easeInOutSine',
        bottom: '0px',
      })
  }

  static anotherSuggestion() {
    let anotherSuggestion = anime.timeline();
    anotherSuggestion
      .add({
        delay: 0,
        targets: '.restaurant-information-section, .links-div, .map-div',
        duration: 500,
        easing: 'easeInOutSine',
        opacity: 0,
      })
      .add({
        delay: 200,
        targets: '.restaurant-information-section, .links-div, .map-div',
        duration: 500,
        easing: 'easeInOutSine',
        opacity: 1,
      })
  }
}