import React, { Component } from 'react';
import SuggestionFooter from '../components/SuggestionFooter';
import SuggestionBody from '../components/SuggestionBody';
import '../css/SuggestionScreen.css';

class SuggestionScreen extends Component {
  render() {
    return(
      <div className="body-wrapper" style={{display: 'block'}}>
        <SuggestionBody restaurant={this.props.state.restaurant}/>
        <SuggestionFooter setState={(newState) => {this.props.setState(newState)}} state={this.props.state}/>
      </div>
    );
  }
}

export default SuggestionScreen;