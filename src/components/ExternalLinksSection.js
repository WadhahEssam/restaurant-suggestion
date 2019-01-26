import React from 'react';
import foursquareLogo from '../img/foursquare-logo.png';
import googleMapsLogo from '../img/google-maps-logo.png';
import '../css/ExternalLinksSection.css';

const ExternalLinksSection = ({restaurant}) => (
  <div className="links-div">
    <a 
      target="_blank" 
      rel="noopener noreferrer"
      href={`https://www.google.com/maps?q=${restaurant.lat},${restaurant.lon}`}
    >                
      <img src={googleMapsLogo} className="google-maps-logo link-logo" alt="google maps link"/>
    </a>
    <a 
      target="_blank" 
      rel="noopener noreferrer"
      href={restaurant.link}
    >
      <img src={foursquareLogo} className="foursquare-logo link-logo" alt="foursquare link"/>
    </a>
    <div className="box-shadow-div-left" />
    <div className="box-shadow-div-right" />
  </div>
);

export default ExternalLinksSection;