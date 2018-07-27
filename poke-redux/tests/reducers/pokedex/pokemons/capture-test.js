/* eslint-env jest */
import { capturePokemonReducer } from '../../../../src/reducer/pokemons'

describe('suite capture pokemon reducer', () => {
  it('should return object with property captured in true', () => {
    expect(capturePokemonReducer()).toEqual({ captured: true })
  })
})
