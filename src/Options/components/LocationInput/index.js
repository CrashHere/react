import React, { Component } from 'react';
import './locationInput.css';

import MagnifyingGlass from '../../../magnifying-glass.png'

class LocationInput extends Component {
  render() {
    const {
      onOptionClick,
    } = this.props;
    return (
      <div className="location-input-container">
        <div className="location-input-text">
          <span className="location-input-text-bold">Where are you right now?<br/></span>
          <span>Your location is used to find the<br/>closest place you can get help.</span>
        </div>
        <form className="location-input-form">
          <div className="location-input-search">
            <img src={MagnifyingGlass} className="location-input-magnifying-glass" />
            <input type="text" placeholder="Enter your current location"/>
          </div>
          <div className="location-input-buttons">
            <div className="location-input-button" onClick={onOptionClick("gpsOrManual")}>
              <span className="location-input-button-text">Next</span>
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default LocationInput
