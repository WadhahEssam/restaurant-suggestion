import React, { Component } from 'react';
import WelcomeMenu from './components/WelcomeMenu';
import SuggestionScreen from './components/SuggestionScreen';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeMenu/>
        <SuggestionScreen/>
      </div>
    );
  }
}

export default App;
