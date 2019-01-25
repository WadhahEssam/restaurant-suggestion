import React from 'react';
import ReactStars from 'react-stars';
import '../css/RestaurantBasicInformation.css';

const RestaurantBasicInformation = ({restaurant}) => (
  <div className="restaurant-main-information">
    <h3 className="restaurant-name">{restaurant.name}</h3>
    <div className="rating">
      <ReactStars
        id="stars"
        count={5}
        size={20}
        edit={false}
        color2={'#ffd700'}
        value={parseFloat(restaurant.rating / 2)}
      />
      <h5 className="rating-value">{restaurant.rating}/10</h5>
    </div>
    {
      (restaurant.open === "1") ?
      <div className="is-open">
        <h6 className="is-open-text">مفتوح</h6>
      </div> :
      <div className="is-closed">
        <h6 className="is-open-text">مغلق</h6>
      </div> 
    }
  </div>
);

export default RestaurantBasicInformation;
