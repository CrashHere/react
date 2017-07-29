import React, { Component } from 'react';
// import cm from "react-classname-module";
import './desktopMain.css';

import SideComponent from "../SideComponent"

class DesktopMain extends Component {
  render() {
    return (
      <div className="desktop-main-container">
        <div className="side-component">
          <SideComponent />
        </div>
        <div className="map-component">Map Goes Here</div>
      </div>
    )
  }
}

export default DesktopMain
// export default cm(DesktopMain, styles)
