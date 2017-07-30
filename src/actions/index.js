export const SHOW_ERROR = 'SHOW_ERROR'
export const MAP = 'MAP'
export const SHOW_DIRECTIONS_TRUE = 'SHOW_DIRECTIONS_TRUE'
export const SHOW_DIRECTIONS_FALSE = 'SHOW_DIRECTIONS_FALSE'

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

export function showDirections () {
  return {
    type: SHOW_DIRECTIONS_TRUE
  }
}

export function dontShowDirections () {
  return {
    type: SHOW_DIRECTIONS_FALSE
  }
}
