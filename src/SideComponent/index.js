import React, { Component } from 'react';
import './sideComponent.css';

import Options from '../Options'

class SideComponent extends Component {
  render() {
    return (
      <div className="side-component-container">
        <div className="logo-container">
          <i className="fa fa-home" aria-hidden="true"></i>
          <span className="logo-text">CRASH HERE</span>
        </div>
        <div className="options">
          <Options />
        </div>
      </div>
    );
  }
}

export default SideComponent
