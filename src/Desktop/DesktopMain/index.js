import React, { Component } from 'react';
import './desktopMain.css';
import DesktopMap from '../DesktopMap/DesktopMap'
import sampleData from '../../sampleData.json'

class DesktopMain extends Component {
  render() {
    return (
      <div>
        <DesktopMap data={sampleData}/>
      </div>
    )
  }
}

export default DesktopMain
