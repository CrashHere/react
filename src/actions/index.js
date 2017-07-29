export const SHOW_ERROR = 'SHOW_ERROR'

export function errorMessage (error) {
  return {
    type: SHOW_ERROR,
    error
  }
}