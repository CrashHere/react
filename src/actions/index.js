export const SHOW_ERROR = 'SHOW_ERROR'
export const MAP = 'MAP'

export function errorMessage (error) {
  return {
    type: SHOW_ERROR,
    error
  }
}

export function mapInstance (map) {
  return {
    type: MAP,
    map
  }
}