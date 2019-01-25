import React, { Component } from 'react';
import axios from 'axios';
import '../css/SuggestionFooter.css';
import loadingIcon from '../img/loading-icon.svg';
import SuggestionScreenAnimation from '../animation/SuggestionScreenAnimation';

class SuggestionFooter extends Component {
  state = {
    loading: false,
    isFetched: false,
  }

  onClickAnotherSuggestionButton = async () => {
    if (this.state.loading == false) {
      this.setState({loading: true});
      let restaurant = await axios
      .post(`https://fadfadah.net/wainnakel/getInformation`, 
      { 
        lat: this.props.state.currentLocation.latitude,
        long: this.props.state.currentLocation.longitude
      });
      SuggestionScreenAnimation.anotherSuggestion();
      setTimeout(() => {
        this.props.setState({restaurant: restaurant.data})
      }, 500)
      this.setState({loading: false});
    }
  }

  renderSuggestionButton = () => {
    if (this.state.loading === false) {
      return (
          <button 
          onClick={this.onClickAnotherSuggestionButton} 
          className="footer-suggest-button"
        >
          إقتراح اخر
        </button>
      );
    } 
    else if (this.state.loading === true) {
      return (
          <button 
          onClick={this.onClickAnotherSuggestionButton} 
          className="footer-suggest-button-loading"
        >
          <img src={loadingIcon} className="loading-icon-2" alt="loading icoin" />
        </button>
      );
    }
  }

  render() {
    return(
      <div>
        <div className="footer-section">
          {this.renderSuggestionButton()}
        </div>
      </div>
    );
  }
}

export default SuggestionFooter;