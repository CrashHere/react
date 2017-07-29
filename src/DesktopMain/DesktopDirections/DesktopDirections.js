import React from 'react'

class Directions extends React.Component {
  componentDidMount () {
    const platform = new window.H.service.Platform({
      'app_id': 'R8EbnjUs0cYuzo2VbpAy',
      'app_code': 'DwZ7Jzz1aqmZQcurKWq6sA'
    })

    const defaultLayers = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
    const map = new window.H.Map(
      this.refs.directionContainer,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: -36.8484600, lng: 174.7633 }
      })
    const mapEvents = new window.H.mapevents.MapEvents(map)
    const behavior = new window.H.mapevents.Behavior(mapEvents)
    window.addEventListener('resize', () => map.getViewPort().resize())
    const routingParameters = {
      'mode': 'fastest;car',
      'waypoint0': `geo!${this.props.start.lat},${this.props.start.lng}`,
      'waypoint1': `geo!${this.props.end.lat},${this.props.end.lng}`,
      'representation': 'display'
    }
    var onResult = function(result) {
      var route,
        routeShape,
        startPoint,
        endPoint,
        strip;
      if(result.response.route) {
      // Pick the first route from the response:
      route = result.response.route[0]
      // Pick the route's shape:
      routeShape = route.shape

      // Create a strip to use as a point source for the route line
      strip = new window.H.geo.Strip()

      // Push all the points in the shape into the strip:
      routeShape.forEach(function(point) {
        var parts = point.split(',')
        strip.pushLatLngAlt(parts[0], parts[1])
      })

      // Retrieve the mapped positions of the requested waypoints:
      startPoint = route.waypoint[0].mappedPosition
      endPoint = route.waypoint[1].mappedPosition

      // Create a polyline to display the route:
      var routeLine = new window.H.map.Polyline(strip, {
        style: { strokeColor: 'blue', lineWidth: 10 }
      })

      // Create a marker for the start point:
      var startMarker = new window.H.map.Marker({
        lat: startPoint.latitude,
        lng: startPoint.longitude
      })

      // Create a marker for the end point:
      var endMarker = new window.H.map.Marker({
        lat: endPoint.latitude,
        lng: endPoint.longitude
    })

    // Add the route polyline and the two markers to the map:
    map.addObjects([routeLine, startMarker, endMarker])

    // Set the map's viewport to make the whole route visible:
    map.setViewBounds(routeLine.getBounds())
  }
};

// Get an instance of the routing service:
var router = platform.getRoutingService()

// Call calculateRoute() with the routing parameters,
// the callback and an error callback function (called if a
// communication error occurs):
router.calculateRoute(routingParameters, onResult,
  function(error) {
    alert(error.message);
  });
  }

  render () {
    console.log(this.props)
    return (
      <div ref='directionContainer' className='mapContainer'>
      </div>
    )
  }
}

export default Directions