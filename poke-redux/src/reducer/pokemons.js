import { ADD_POKEMONS, LIKE_POKEMON, CAPTURE_POKEMON } from '../actions/types'

function addPokemonsReducer (state = {}, action) {
  return { ...state, ...action.payload.pokemons }
}

function likePokemonReducer (state = {}, action) {
  return { ...state, like: !state.like }
}

function capturePokemonReducer (state = {}, action) {
  return { ...state, captured: true }
}

export default function PokemonsReducer (state = {}, action) {
  switch (action.type) {
    case ADD_POKEMONS:
      return addPokemonsReducer(state, action)
    case LIKE_POKEMON:
      const { pokemon } = action.payload
      return { ...state, [pokemon.id]: likePokemonReducer(state[pokemon.id], action) }
    case CAPTURE_POKEMON:
      const pokemonCaptured = action.payload.pokemon
      return { ...state, [pokemonCaptured.id]: capturePokemonReducer(state[pokemonCaptured.id], action) }
    default:
      return state
  }
}
