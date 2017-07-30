import React, { Component } from 'react';
import './availableShelters.css';
import { connect } from 'react-redux'

import { dontShowDirections } from "../actions"

import DesktopMap from "../DesktopMain/DesktopMap/DesktopMap.js"

class GpsOrManual extends Component {
  render() {
    const {
      onOptionClick,
      goToMap,
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

function mapDispatchToProps (dispatch) {
  return {
    showDirectionsFalse: () => dispatch(dontShowDirections())
  }
}
export default connect(null, mapDispatchToProps)(GpsOrManual)

// <button onTouchStart={this.props.showDirectionsFalse}>Back</button>
