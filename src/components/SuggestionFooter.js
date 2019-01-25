import React, { Component } from 'react';
import axios from 'axios';
import '../css/SuggestionFooter.css';
import loadingIcon from '../img/loading-icon.svg';

class SuggestionFooter extends Component {
  state = {
    loading: false,
    isFetched: false,
  }

  onClickAnotherSuggestionButton = async () => {
    this.setState({loading: true});
    let restaurant = await axios
    .post(`https://fadfadah.net/wainnakel/getInformation`, 
    { 
      lat: this.props.state.currentLocation.latitude,
      long: this.props.state.currentLocation.longitude
    });
    this.props.setState({restaurant: restaurant.data})
    this.setState({loading: false});
  }

  renderSuggestionButtonContent = () => {
    if (this.state.loading === false) {
      return 'إقتراح اخر'
    } 
    else if (this.state.loading === true) {
      return(<img src={loadingIcon} className="loading-icon-2" alt="loading icoin" />);
    }
  }

  render() {
    return(
      <div>
        <div className="footer-section">
          <button 
            onClick={this.onClickAnotherSuggestionButton} 
            className="footer-suggest-button"
          >
            {this.renderSuggestionButtonContent()}
          </button>
        </div>
      </div>
    );
  }
}

export default SuggestionFooter;