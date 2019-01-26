import React, { Component } from 'react';
import WelcomeMenu from './components/WelcomeMenu';
import SuggestionScreen from './components/SuggestionScreen';
import './css/App.css';

class App extends Component {
  state = {
    restaurant: null,
    currentLocation: null,
  }

  getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({currentLocation: {latitude: position.coords.latitude, longitude: position.coords.longitude}})
      }, function() {});
    } else {
      console.log('browser isn\'t supported');
    }
  }

  render() {
    console.log(this.state);
    if (this.state.currentLocation == null) {
      this.getCurrentLocation();
    }
    return (
      <div className="App">
        <WelcomeMenu setState={(newState) => {this.setState(newState)}} state={this.state}/>
        <SuggestionScreen setState={(newState) => {this.setState(newState)}} state={this.state}/>
      </div>
    );
  }
}

export default App;
