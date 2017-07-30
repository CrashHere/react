import React, { Component } from 'react';
import './gpsOrManual.css';


class GpsOrManual extends Component {
  render() {
    const {
      onOptionClick,
      mobile,
    } = this.props;
    return (
      <div className="gps-or-manual-container">
        {mobile ?
          <div>
            <div className="gps-or-manual-text">
              <span>Dont have a place to sleep tonight?<br/>Give us your location to get help.</span>
            </div>
            <div className="gps-or-manual-buttons">
              <div className="gps-or-manual-button" onClick={onOptionClick("location")}>
                <span className="gps-or-manual-button-text">Enter Your Location</span>
              </div>
            </div>
          </div>
          :
          <div className="gps-or-manual-text">
            <span>Dont have a place to sleep tonight?<br/>Select a shelter to find info and directions</span>
          </div>
        }

      </div>

    );
  }
}

export default GpsOrManual
