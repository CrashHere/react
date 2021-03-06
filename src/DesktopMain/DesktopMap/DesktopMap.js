import React from 'react'
import connectHits from 'react-instantsearch/src/connectors/connectHits'
import {connect} from 'react-redux'

import Modal from '../../Modal'
import Directions from '../DesktopDirections/DesktopDirections'
import './map.css'
import Marker from './Marker'

import {mapInstance, showDirections} from '../../actions'

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
      center: { lat: -36.8484600, lng: 174.7633 },
      zoom: 10
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.generateDirections = this.generateDirections.bind(this)
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(position => {
      const { coords: { latitude: lat, longitude: lng }  } = position
      this.setState({
        center: {
          lat,
          lng,
          zoom: 20
        }
      })
      if (Boolean(this.props.map)) {
        this.props.map.setCenter({
          lat,
          lng
        })
        this.props.map.setZoom(15)
        }
    })
  }

  componentWillRecieveProps () {
    this.props.mapInstance(null)
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
        zoom: this.state.zoom,
        center: this.state.center
      }
    )
    const mapEvents = new window.H.mapevents.MapEvents(map)
    const behavior = new window.H.mapevents.Behavior(mapEvents)
    window.addEventListener('resize', () => map.getViewPort().resize())
    this.props.mapInstance(map)
  }

  handleModalClose () {
    this.setState({
      showModal: false
    })
  }

  handleClick (hit) {
    this.setState({
      current: hit,
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
        {shelter.availability && <p className="pop-up-hours">{shelter.availability}</p>}
        <div className="pop-up-buttons">
          <button className="directions-button" onClick={() => this.generateDirections(shelter._geoloc)}>Directions</button>
          <button className="close-button" onClick={() => this.handleModalClose()}>Close</button>
        </div>
      </div>
    )
  }

  generateDirections (destination) {
    console.log(destination)
    navigator.geolocation.getCurrentPosition(position => {
    this.setState({
      end: destination,
      start: {lat: position.coords.latitude, lng:position.coords.longitude},
      })
      this.props.showDirectionsTrue()
    })
  }

  render () {
    const { hits } = this.props
    const {
      showModal
    } = this.state
    if (this.props.showDirections) {
      console.log(this.state.end)
      return (
        <Directions
          end={this.state.end}
          start={this.state.start}
        />
      )
    } else {
      return (
        <div
          className='mapContainer'
          ref={element => {
            console.log(element)
            if (!this.props.map) {
              this.createMap(element)
            }
          }}
        >
          {
            this.props.map
              ? (
                hits
                  .filter(hit => Boolean(hit._geoloc))
                  .map((hit, index) => {
                  return (
                    <Marker
                      hit={hit}
                      key={index}
                      map={this.props.map}
                      onClick={this.handleClick}
                    />
                  )
                })
              )
              : null
          }
          {
            showModal && <div className="modal"><Modal content={this.modalContent()} handleClose={this.handleModalClose} /></div>
          }
        </div>
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    map: state.map,
    showDirections: state.showDirections,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    mapInstance: map => dispatch(mapInstance(map)),
    showDirectionsTrue: () => dispatch(showDirections())
  }
}

const withSearch = connectHits

const withState = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default withState(withSearch(DesktopMap))
