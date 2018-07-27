import React from 'react'
import { connect } from 'react-redux'
import Container from '../Container'
import Search from './Search'
import PokeList from './PokeList'
import { capturePokemon, searchPokemon } from '../../actions'
import { FETCH_POKEMON } from '../../actions/types'
export class Pokedex extends React.Component {
  constructor (props) {
    super(props)
    this.capture = this.capture.bind(this)
    this.onChangeSearchQuery = this.onChangeSearchQuery.bind(this)
  }

  capture (pokemon) {
    this.props.dispatch(capturePokemon(pokemon))
  }

  onChangeSearchQuery (event) {
    const query = event.target.value
    this.props.dispatch(searchPokemon(query))
  }

  componentDidMount () {
    this.props.dispatch({ type: FETCH_POKEMON })
    // this.props.dispatch(fetchPokemons())
  }

  render () {
    return (
      <Container>
        <Search onChange={this.onChangeSearchQuery} query={this.props.query} />
        <div>{ this.props.loading ? '..loading' : null } </div>
        <PokeList pokemons={this.props.pokemons} onClick={this.capture} filter={this.props.query} />
      </Container>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    pokemons: Object.values(state.pokedex.pokemons),
    query: state.pokedex.search,
    loading: state.pokedex.loading
  }
}

export default connect(mapStateToProps)(Pokedex)
