import PokemonsReducer from './pokemons'
import SeachReducer from './search'
import loadingPokedexReducer from './loadingPokedex'

export default function (state = {}, action) {
  return {
    pokemons: PokemonsReducer(state.pokemons, action),
    search: SeachReducer(state.search, action),
    loading: loadingPokedexReducer(state.loading, action)
  }
}
