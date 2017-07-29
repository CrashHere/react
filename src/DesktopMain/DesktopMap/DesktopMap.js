import React from 'react'

import Modal from '../../Modal'
import Directions from '../DesktopDirections/DesktopDirections'
import './map.css'
import Marker from './Marker'

class DesktopMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: {
        name: '',
        address: '',
        phone: ''
      },
      map: null,
      showModal: false,
      showDirections: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.generateDirections = this.generateDirections.bind(this)
  }

  createMap (element) {
    const platform = new window.H.service.Platform({
      'app_id': 'R8EbnjUs0cYuzo2VbpAy',
      'app_code': 'DwZ7Jzz1aqmZQcurKWq6sA'
    })

    const defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    const map = new window.H.Map(
      element,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: -36.8484600, lng: 174.7633 }
      }
    )
    const mapEvents = new window.H.mapevents.MapEvents(map)
    const behavior = new window.H.mapevents.Behavior(mapEvents)
    window.addEventListener('resize', () => map.getViewPort().resize())
    this.setState({
      map
    })
  }

  handleModalClose () {
    this.setState({
      showModal: false
    })
  }

  handleClick (hit) {
    console.log('click: ', hit)
    this.setState({
      current: hit,
      showModal: true
    })
  }

  modalContent () {
    const shelter = this.state.current
    return (
      <div>
        <p>{shelter.name}</p>
        <p>{shelter.address}</p>
        <p>{shelter.phone}</p>
        <button onClick={() => this.generateDirections(shelter._geoloc)}>Directions</button>
      </div>
    )
  }

  generateDirections (destination) {
    navigator.geolocation.getCurrentPosition(position => {
    this.setState({
      end: destination,
      start: {lat: position.coords.latitude, lng:position.coords.longitude},
      showDirections: true
      })
    })
  }

  render () {
    const { map, showModal } = this.state
    return (
      <div
        className='mapContainer'
        ref={element => {
          if (!this.state.map) {
            this.createMap(element)
          }
        }}
      >
        {
          map
            ? (
              this.props.data
                .filter(hit => Boolean(hit._geoloc))
                .map((hit, index) => {
                return (
                  <Marker
                    hit={hit}
                    key={index}
                    map={map}
                    onClick={this.handleClick}
                  />
                )
              })
            )
            : null
        }
        {
          showModal && <Modal content={this.modalContent()} onClose={this.handleModalClose} />
        }
      </div>
    )
    // return (
    //   <div className='DesktopMap'>
    //     {!this.state.showDirections
    //      ? <div ref='mapContainer' className='mapContainer'>
    //       {this.state.showModal && <Modal content={this.modalContent()} onClose={this.handleModalClose} />}
    //     </div>
    //      : <Directions start={this.state.start} end={this.state.end} />}
    //   </div>
    // )
  }
}

export default DesktopMap
