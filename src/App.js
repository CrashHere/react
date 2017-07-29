import React, { Component } from 'react';
import './App.css';

import DesktopMain from './DesktopMain'

class App extends Component {
  state = {
    windowWidth: window.innerWidth
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions)
  }
  updateDimensions = () => {
    this.setState ({
      windowWidth: window.innerWidth
    })
  }
  render() {
    return (
      <div className="app">
        {this.state.windowWidth > 600 ?
          <DesktopMain />
          :
          <div>Hello world</div>
        }
      </div>
    );
  }
}

export default App;
