import React, { Component } from 'react';
import SuggestionScreenAnimation from '../animation/SuggestionScreenAnimation';
import SuggestionFooter from '../components/SuggestionFooter';
import SuggestionBody from '../components/SuggestionBody';
import '../css/SuggestionScreen.css';

class SuggestionScreen extends Component {
  render() {
    return(
      <div className="body-wrapper" style={{display: 'block'}}>
        <SuggestionBody/>
        <SuggestionFooter/>
      </div>
    );
  }
}

export default SuggestionScreen;