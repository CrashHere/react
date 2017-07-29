import React, { Component } from 'react';
import './App.css';

import DesktopMain from './DesktopMain'
import MobileMain from './MobileMain'
import SearchProvider from './SearchProvider'

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
        <SearchProvider>
          {this.state.windowWidth > 1000 ?
            <DesktopMain />
            :
            <MobileMain
              mobile
            />
          }
        </SearchProvider>
      </div>
    );
  }
}

export default App;
