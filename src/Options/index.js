import React, { Component } from 'react';
import './options.css';

import GpsOrManual from "./components/GpsOrManual"
import LocationInput from "./components/LocationInput"

class Options extends Component {
  state = {
    component: "gpsOrManual"
  }
  toggleComponent = (component) => () => {
    this.setState({
      component
    })
  }
  render() {
    const components = {
      gpsOrManual: (
        <GpsOrManual
          onOptionClick={this.toggleComponent}
          mobile={this.props.mobile}
        />
      ),
      location: (
        <LocationInput
          onOptionClick={this.toggleComponent}
          goToMap={this.props.goToMap}
          mobile={this.props.mobile}
        />
      ),
    }
    return (
      <div className="options-container">
        {
          components[this.state.component]
        }
      </div>
    );
  }
}

export default Options
