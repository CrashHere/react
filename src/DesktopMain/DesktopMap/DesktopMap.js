import React from 'react'
import './map.css'
import Modal from '../../Modal'
import Directions from '../DesktopDirections/DesktopDirections'

class DesktopMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: {
        name: '',
        address: '',
        phone: ''
      },
      showModal: false,
      showDirections: false
    }
    this.generateMarkers = this.generateMarkers.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.generateDirections = this.generateDirections.bind(this)
  }
  componentDidMount () {
    const platform = new window.H.service.Platform({
      'app_id': 'R8EbnjUs0cYuzo2VbpAy',
      'app_code': 'DwZ7Jzz1aqmZQcurKWq6sA'
    })

    const defaultLayers = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
    console.log(this.refs)
    const map = new window.H.Map(
      this.refs.mapContainer,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: -36.8484600, lng: 174.7633 }
      })
    const mapEvents = new window.H.mapevents.MapEvents(map)
    const behavior = new window.H.mapevents.Behavior(mapEvents)
    window.addEventListener('resize', () => map.getViewPort().resize())
    this.generateMarkers(map)
  }

  generateMarkers (map) {
    window.markers = []
    var animatedSvg =
   '<div><svg width="20" height="20" ' +
   'xmlns="http://www.w3.org/2000/svg" ' +
   'style="transform:translate(-10px, -10px)">' +
   '<circle cx="10" cy="10" r="5" stroke="#000" stroke-width="1" fill="#ff00ff" />'+
   '</svg><div>'
    this.props.data.map((entry, i) => {
    if (entry._geoloc) {
      var icon = new window.H.map.DomIcon(animatedSvg, {
        onAttach: element => {
          element.addEventListener('click', () => this.handleClick(entry))
        }
      })
      window['markers'+i] = new window.H.map.DomMarker(entry._geoloc,{icon: icon})
      window.markers.push(i)
      map.addObject(window['markers' + i])
      }
    })
  }

  handleModalClose () {
    this.setState({
      showModal: false
    })
  }

  handleClick(entry) {
    this.setState({
      current: entry,
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
    return (
      <div className='DesktopMap'>
        {!this.state.showDirections
         ? <div ref='mapContainer' className='mapContainer'>
          {this.state.showModal && <Modal content={this.modalContent()} onClose={this.handleModalClose} />}
        </div>
         : <Directions start={this.state.start} end={this.state.end} />}
      </div>
    )
  }
}

export default DesktopMap
