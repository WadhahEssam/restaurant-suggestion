import React, { Component } from 'react';
import '../css/SuggestionFooter.css';

class SuggestionFooter extends Component {
  render() {
    return(
      <div>
        <div className="footer-section">
          <button className="footer-suggest-button">إقتراح اخر</button>
        </div>
      </div>
    );
  }
}

export default SuggestionFooter;