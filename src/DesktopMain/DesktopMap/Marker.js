import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {connect} from 'react-redux'

class Marker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      marker: null
    }
  }

  componentWillMount () {
    const { hit, map, onClick } = this.props
    const animatedSvg =
      '<div><svg width="20" height="20" ' +
      'xmlns="http://www.w3.org/2000/svg" ' +
      'style="transform:translate(-10px, -10px)">' +
      '<circle cx="10" cy="10" r="5" stroke="#000" stroke-width="1" fill="#ff00ff" />'+
      '</svg><div>'
    const icon = new window.H.map.DomIcon(animatedSvg, {
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
