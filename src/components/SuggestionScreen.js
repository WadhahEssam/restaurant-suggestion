import React, { Component } from 'react';
import SuggestionFooter from '../components/SuggestionFooter';
import SuggestionBody from '../components/SuggestionBody';
import '../css/SuggestionScreen.css';

class SuggestionScreen extends Component {
  render() {
    return(
      <div className="body-wrapper" style={{display: 'none'}}>
        <SuggestionBody/>
        <SuggestionFooter/>
      </div>
    );
  }
}

export default SuggestionScreen;