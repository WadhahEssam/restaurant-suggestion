import anime from 'animejs';

let cssAfterAnimation = {

}

export default class WelcomeMenuAnimation {
  static showSuggestionScreen() {
    let showSuggestionScreen = anime.timeline();
    showSuggestionScreen
      .add({
        delay: 1300,
        targets: '.suggestion-body',
        duration: 800,
        easing: 'easeInOutSine',
        top: '0px',
      })

    let showFooterSection = anime.timeline();
    showFooterSection
      .add({
        delay: 1300,
        targets: '.footer-section',
        duration: 800,
        easing: 'easeInOutSine',
        bottom: '0px',
      })
  }


}