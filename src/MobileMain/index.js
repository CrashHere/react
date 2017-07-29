import React, { Component } from 'react';
import './mobileMain.css';

import sampleData from '../sampleData.json'
import SideComponent from "../SideComponent"

class MobileMain extends Component {
  render() {
    return (
      <div className="mobile-main-container">
        <div className="mobile-side-component">
          <SideComponent
            mobile={this.props.mobile}
           />
        </div>
      </div>
    )
  }
}

export default MobileMain
