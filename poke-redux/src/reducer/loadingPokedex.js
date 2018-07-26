import { LOADING_POKEDEX_POKEMONS } from '../actions/types'

function loadingPokedexReducer (state = false, action) {
  if (action.type === LOADING_POKEDEX_POKEMONS) {
    return action.payload.loading
  }
  return state
}

export default loadingPokedexReducer
