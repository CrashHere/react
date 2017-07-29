import React, { Component } from 'react';
import './desktopMain.css';

import DesktopMap from './DesktopMap/DesktopMap'
import sampleData from '../sampleData.json'
import SideComponent from "../SideComponent"

class DesktopMain extends Component {
  render() {
    return (
      <div className="desktop-main-container">
        <div className="side-component">
          <SideComponent />
        </div>
        <div className="map-component">
          <DesktopMap data={sampleData}/>
        </div>
      </div>
    )
  }
}

export default DesktopMain
