import request from 'superagent'

export function getGeocode (address) {
  return request.get()
  .query('key', 'AIzaSyABO8bUBvfeUsr_m9lEkqBoi3FvyM2GKWg')
  .query('address', address)
}