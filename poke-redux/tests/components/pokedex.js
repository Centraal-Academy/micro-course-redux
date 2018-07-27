/* eslint-env jest */
import { Pokedex } from '../../src/components/Pokedex'
import { shallow } from 'enzyme'

describe('suite test pokedex component', () => {
  const mock = jest.fn()
  const wrapper = shallow(<Pokedex capturePokemon={mock} />)
  const instance = wrapper.instance()
  instance.capturePokemon()
  expect(mock).toHaveBeenCalled()
})
