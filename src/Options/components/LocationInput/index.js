import React, { Component } from 'react';
import './locationInput.css';
import connectSearchBox from 'react-instantsearch/src/connectors/connectSearchBox'

import MagnifyingGlass from '../../../magnifying-glass.png'

class LocationInput extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      query: ''
    }
  }

  handleChange (event) {
    const { refine } = this.props
    const query = event.target.value
    refine(query)
    this.setState({
      query
    })
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render() {
    const {
      // onOptionClick,
      goToMap,
    } = this.props;
    const { query } = this.state
    return (
      <div className="location-input-container">
        <div className="location-input-text">
          <span className="location-input-text-bold">Where are you right now?<br/></span>
          <span>Your location is used to find the<br/>closest place you can get help.</span>
        </div>
        <form
          className="location-input-form"
          onSubmit={this.handleSubmit}
        >
          <div className="location-input-search">
            <img src={MagnifyingGlass} className="location-input-magnifying-glass" />
            <input
              autoFocus
              className='location-input-input'
              onChange={this.handleChange}
              placeholder='Enter your current location'
              type='text'
              value={query}
            />
          </div>
          <div className="location-input-buttons">
            <div className="location-input-button" onClick={goToMap("mapMobile")}>
              <span className="location-input-button-text">Next</span>
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default connectSearchBox(LocationInput)
