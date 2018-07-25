import { ADD_POKEMONS, LIKE_POKEMON } from '../actions/types'

function addPokemonsReducer (state = {}, action) {
  return { ...state, ...action.payload.pokemons }
}

function likePokemonReducer (state = {}, action) {
  return { ...state, like: !state.pokemon.like }
}

export default function PokemonsReducer (state = {}, action) {
  switch (action.type) {
    case ADD_POKEMONS:
      return addPokemonsReducer(state, action)
    case LIKE_POKEMON:
      const { pokemon } = action
      return likePokemonReducer(state[pokemon.id], action)
    default:
      return state
  }
}
