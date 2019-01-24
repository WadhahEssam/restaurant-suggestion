import React, { Component } from 'react';
import WelcomeMenu from './components/WelcomeMenu';
import SuggestionScreen from './components/SuggestionScreen';
import './css/App.css';

class App extends Component {
  state = {
    restaurant: null,
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <WelcomeMenu setState={(newState) => {this.setState(newState)}} state={this.state}/>
        <SuggestionScreen setState={(newState) => {this.setState(newState)}} state={this.state}/>
      </div>
    );
  }
}

export default App;
