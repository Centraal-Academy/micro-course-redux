import React from 'react'
import { connect } from 'react-redux'
import PokeList from './PokeList'
import { FETCH_POKEMON } from '../../actions/types'
import Loader from '../Loader'
function makeFilterByName (query) {
  return function filter (pokemon) {
    return pokemon.name.toLowerCase().includes(query.toLowerCase())
  }
}

function filterPokemons (pokemons, filter) {
  if (filter) {
    const filterByName = makeFilterByName(filter)
    return pokemons.filter(filterByName)
  }
  return pokemons
}

export class PokedexList extends React.Component {
  componentDidMount () {
    this.props.fetchPokemons()
  }

  render () {
    return this.props.loading
      ? <Loader />
      : <PokeList
        pokemons={filterPokemons(this.props.pokemons, this.props.query)}
        onClick={this.props.onClick}
      />
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPokemons: () => dispatch({ type: FETCH_POKEMON })
  }
}

function mapStateToProps (state, props) {
  return {
    pokemons: Object.values(state.pokedex.pokemons),
    loading: state.pokedex.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexList)
