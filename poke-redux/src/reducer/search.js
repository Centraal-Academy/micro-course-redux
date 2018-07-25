import { SEARCH_POKEMON } from '../actions/types'

function searchReducer (state = '', action) {
  if (action.type === SEARCH_POKEMON) {
    return action.payload.search
  }
  return state
}

export default searchReducer
