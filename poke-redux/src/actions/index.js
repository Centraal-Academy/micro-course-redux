/* global fetch */
import {
  ADD_POKEMONS,
  LIKE_POKEMON,
  CAPTURE_POKEMON,
  SEARCH_POKEMON,
  LOADING_POKEDEX_POKEMONS
} from './types'

export function addPokemons (pokemons) {
  return {
    type: ADD_POKEMONS,
    payload: {
      pokemons
    }
  }
}

export function likePokemon (pokemon) {
  return {
    type: LIKE_POKEMON,
    payload: {
      pokemon
    }
  }
}

export function capturePokemon (pokemon) {
  return {
    type: CAPTURE_POKEMON,
    payload: {
      pokemon
    }
  }
}

export function loadingPokedexPokemons (loading) {
  return {
    type: LOADING_POKEDEX_POKEMONS,
    payload: {
      loading
    }
  }
}

export function fetchPokemons () {
  return (dispatch) => {
    dispatch(loadingPokedexPokemons(true))
    return fetch('http://localhost:3000/pokemons')
      .then(response => response.json())
      .then(pokemons => {
        dispatch(loadingPokedexPokemons(false))
        dispatch(addPokemons(pokemons))
      })
      .catch(console.error)
  }
}

export function searchPokemon (query) {
  return {
    type: SEARCH_POKEMON,
    payload: {
      query
    }
  }
}
