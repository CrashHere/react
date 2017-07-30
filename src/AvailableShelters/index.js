import React, { Component } from 'react';
import './availableShelters.css';

import DesktopMap from "../DesktopMain/DesktopMap/DesktopMap.js"

class GpsOrManual extends Component {
  render() {
    const {
      onOptionClick,
    } = this.props;
    return (
      <div className="available-shelters-container">
        <div className="available-shelters-header">
          <span>Available Shelters</span>
        </div>
        <div className="available-shelters-map-container">
          <DesktopMap />
        </div>
      </div>

    );
  }
}

export default GpsOrManual
