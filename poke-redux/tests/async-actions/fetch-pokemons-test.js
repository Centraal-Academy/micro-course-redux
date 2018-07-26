/* eslint-env jest */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchPokemons } from '../../src/actions'
import { ADD_POKEMONS, LOADING_POKEDEX_POKEMONS } from '../../src/actions/types'
import fetchMock from 'fetch-mock'

const mockStore = configureMockStore([thunk])
const pokemons = {
  '01': {
    'id': '01',
    'name': 'Bulbasaur',
    'image': ''
  }
}

describe('suite fetch pokemons action', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('should call action LOADING_POKEDEX_POKEMONS and ADD_POKEMONS', () => {
    expect.assertions(1)
    fetchMock
      .getOnce('http://localhost:3000/pokemons', { body: pokemons, headers: { 'content-type': 'application/json' } })

    const expectedActions = [
      { type: LOADING_POKEDEX_POKEMONS, payload: { loading: true } },
      { type: LOADING_POKEDEX_POKEMONS, payload: { loading: false } },
      { type: ADD_POKEMONS, payload: { pokemons } }
    ]
    const store = mockStore({ pokedex: {
      pokemons: {},
      loading: false
    }})

    return store.dispatch(fetchPokemons())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
