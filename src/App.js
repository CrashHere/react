import React, { Component } from 'react';
import './App.css';

import DesktopMain from './DesktopMain'
import MobileMain from './MobileMain'

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
        {this.state.windowWidth > 1000 ?
          <DesktopMain />
          :
          <MobileMain
            mobile
          />
        }
      </div>
    );
  }
}

export default App;
