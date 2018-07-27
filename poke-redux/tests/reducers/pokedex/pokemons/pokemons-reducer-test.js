/* eslint-env jest */
import pokemonReducer from '../../../../src/reducer/pokemons'
import { addPokemons } from '../../../../src/actions'
const pokemons = {
  '01': {
    'id': '01',
    'name': 'Bulbasaur',
    'image': ''
  }
}

describe('suite add pokemons reducer', () => {
  it('should return a object with pokemons from the action', () => {
    const action = addPokemons(pokemons)
    const state = {}
    expect(pokemonReducer(state, action)).toEqual(pokemons)
  })
})
