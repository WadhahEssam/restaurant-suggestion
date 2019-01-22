import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../css/WelcomeMenu.css';

class WelcomeMenu extends Component {
  render() {
    return(
      <div className="welcomeMenu">
        <img src={logo} className="logo" alt="logo" />
        <h1/>
      </div>
    );
  }
}

export default WelcomeMenu;