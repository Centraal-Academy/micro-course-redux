import PokemonsReducer from './pokemons'
import SeachReducer from './search'

export default function (state = {}, action) {
  return {
    pokemons: PokemonsReducer(state.pokemons, action),
    search: SeachReducer(state.search, action)
  }
}
