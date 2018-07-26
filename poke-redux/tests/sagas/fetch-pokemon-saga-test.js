/* eslint-env jest */
import { fetchPokemonsSaga } from '../../src/sagas'
import { put } from 'redux-saga/effects'
import { LOADING_POKEDEX_POKEMONS } from '../../src/actions/types'

describe('suite fetch pokemons action', () => {
  it('should call action LOADING_POKEDEX_POKEMONS and ADD_POKEMONS', () => {
    expect.assertions(1)
    const gen = fetchPokemonsSaga()
    expect(gen.next().value).toEqual(put({type: LOADING_POKEDEX_POKEMONS, payload: { loading: true }}))
  })
})
