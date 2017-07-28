import React, { Component } from 'react';
import './App.css';

import DesktopMain from './Desktop/DesktopMain'

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
      <div className="App">
        <div className="App-header">
          {this.state.windowWidth > 1020 ?
            <DesktopMain />
            :
            <div>Mobile</div>
          }
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
