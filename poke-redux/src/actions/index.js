/* global fetch */
import { ADD_POKEMONS, LIKE_POKEMON } from './types'

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

export function fetchPokemons () {
  return (dispatch) => {
    return fetch('http://localhost:3000/pokemons')
      .then(response => response.json())
      .then(pokemons => {
        dispatch(addPokemons(pokemons))
      })
      .catch(console.error)
  }
}
