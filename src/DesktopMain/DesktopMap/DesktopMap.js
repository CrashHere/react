import React from 'react'
import './map.css'
import Modal from '../../Modal'

class DesktopMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: {
        name: '',
        address: '',
        phone: ''
      },
      showModal: false
    }
    this.generateMarkers = this.generateMarkers.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }
  componentDidMount () {
      const platform = new window.H.service.Platform({
      'app_id': 'R8EbnjUs0cYuzo2VbpAy',
      'app_code': 'DwZ7Jzz1aqmZQcurKWq6sA'
    })

    const defaultLayers = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
    const map = new window.H.Map(
    this.refs.mapContainer,
    defaultLayers.normal.map,
    {
      zoom: 10,
      center: { lat: -36.8484600, lng: 174.7633 }
    })
    map.addEventListener('tap', function(evt) {
    // Log 'tap' and 'mouse' events:
    })
    var mapEvents = new window.H.mapevents.MapEvents(map)
    var behavior = new window.H.mapevents.Behavior(mapEvents)
    map.getViewPort().resize()
    this.generateMarkers(map)
  }

  generateMarkers (map) {
    var animatedSvg =
   '<div><svg width="20" height="20" ' +
   'xmlns="http://www.w3.org/2000/svg" ' +
   'style="transform:translate(-10px, -10px)">' +
   '<circle cx="10" cy="10" r="5" stroke="#000" stroke-width="1" fill="#ff00ff" />'+
   '</svg><div>'
    this.props.data.map(entry => {

    if (entry._geoloc) {
      var icon = new window.H.map.DomIcon(animatedSvg, {
        onAttach: element => {
          element.addEventListener('click', () => this.handleClick(entry))
        }
      })
      map.addObject(new window.H.map.DomMarker(entry._geoloc,{icon: icon}))

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
      <div className="pop-up">
        <p className="pop-up-name">{shelter.name}</p>
        <p className="pop-up-address">{shelter.address}</p>
        <p className="pop-up-phone">Phone: {shelter.phone}</p>
      </div>
    )
  }

  render () {
    return (
      <div ref='mapContainer' className='mapContainer'>
        {this.state.showModal && <Modal content={this.modalContent()} onClose={this.handleModalClose}/>}
      </div>
    )
  }
}

export default DesktopMap
