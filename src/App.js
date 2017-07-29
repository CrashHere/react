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
        {this.state.windowWidth > 1020 ?
          <DesktopMain />
          :
          <div>Mobile</div>
        }
      </div>
    );
  }
}

export default App;
