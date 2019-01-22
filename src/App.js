import React, { Component } from 'react';
import WelcomeMenu from './components/WelcomeMenu';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeMenu/>
      </div>
    );
  }
}

export default App;
