import React, { Component } from 'react';
import './sideComponent.css';

import Options from '../Options'
import AvailableShelters from "../AvailableShelters"

class SideComponent extends Component {
  state = {
    component: "options"
  }
  goToMap = (component) => () => {
    if (this.props.mobile) {
      console.log(component)
      this.setState({
        component
      })
    }
  }
  render() {
    const sideComponents = {
      options: (
        <div className="side-component-container">
          <div className="logo-container">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span className="logo-text">CRASH HERE</span>
          </div>
          <div className="options">
            <Options
              goToMap={this.goToMap}
              mobile={this.props.mobile}
            />
          </div>
        </div>
      ),
      mapMobile: (
        <div className="side-component-map-container">
          <AvailableShelters
            goToMap={this.goToMap}
          />
        </div>
      ),
    }
    return (
      <div>
        {
          sideComponents[this.state.component]
        }
      </div>
    );
  }
}

export default SideComponent
