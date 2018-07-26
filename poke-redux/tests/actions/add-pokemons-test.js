/* eslint-env jest */
import { addPokemons } from '../../src/actions'
import { ADD_POKEMONS } from '../../src/actions/types'

const pokemons = {
  '01': {
    'id': '01',
    'name': 'Bulbasaur',
    'image': ''
  }
}

describe('suite add pokemon action', () => {
  it('should create an action to add pokemons to the store', () => {
    const expectedAction = {
      type: ADD_POKEMONS,
      payload: {
        pokemons
      }
    }
    expect(addPokemons(pokemons)).toEqual(expectedAction)
  })
})
