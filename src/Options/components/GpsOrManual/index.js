import React, { Component } from 'react';
import './gpsOrManual.css';


class GpsOrManual extends Component {
  render() {
    const {
      onOptionClick,
    } = this.props;
    return (
      <div className="gps-or-manual-container">
        <div className="gps-or-manual-text">
          <span>Dont have a place to sleep tonight?<br/>Give us your location to get help.</span>
        </div>
        <div className="gps-or-manual-buttons">
          <div className="gps-or-manual-button">
            <span className="gps-or-manual-button-text">Use GPS</span>
          </div>
          <div className="gps-or-manual-button" onClick={onOptionClick("location")}>
            <span className="gps-or-manual-button-text">Enter Your Location</span>
          </div>
        </div>
      </div>

    );
  }
}

export default GpsOrManual
