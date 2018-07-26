import { SEARCH_POKEMON } from '../actions/types'

function searchReducer (state = '', action) {
  if (action.type === SEARCH_POKEMON) {
    return action.payload.query
  }
  return state
}

export default searchReducer
