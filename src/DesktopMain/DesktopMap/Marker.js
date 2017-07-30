import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {connect} from 'react-redux'

import svg from './markerIcon'

class Marker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      marker: null
    }
  }

  componentWillMount () {
    const { hit, map, onClick } = this.props
    const icon = new window.H.map.DomIcon(svg, {
      onAttach: element => {
        element.addEventListener('click', () => onClick(hit))
      }
    })
    const marker = new window.H.map.DomMarker(hit._geoloc,{icon})
    map.addObject(marker)
    this.setState({
      marker
    })
  }

  componentWillUnmount () {
    const { map } = this.props
    const { marker } = this.state
    map.removeObject(marker)
  }

  render () {
    return <span />
  }
}

Marker.propTypes = {
  hit: PropTypes.shape({
    _geoloc: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    })
  }),
  onClick: PropTypes.func
}

function mapStateToProps (state) {
  return {
    map: state.map || {}
  }
}

export default connect(mapStateToProps)(Marker)
