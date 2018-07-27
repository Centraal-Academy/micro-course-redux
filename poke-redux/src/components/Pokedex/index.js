import React from 'react'
import { connect } from 'react-redux'
import Container from '../Container'
import Search from './Search'
import { capturePokemon, searchPokemon } from '../../actions'
import PokedexList from './PokedexList'
export class Pokedex extends React.Component {
  constructor (props) {
    super(props)
    this.capture = this.capture.bind(this)
    this.onChangeSearchQuery = this.onChangeSearchQuery.bind(this)
  }

  capture (pokemon) {
    this.props.capturePokemon(pokemon)
  }

  onChangeSearchQuery (event) {
    const query = event.target.value
    this.props.changeSearch(query)
  }

  render () {
    return (
      <Container>
        <Search
          onChange={this.onChangeSearchQuery}
          query={this.props.query}
        />
        <PokedexList onClick={this.capture} query={this.props.query} />
      </Container>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    capturePokemon: (pokemon) => dispatch(capturePokemon(pokemon)),
    changeSearch: (query) => dispatch(searchPokemon(query))
  }
}

function mapStateToProps (state, props) {
  return {
    query: state.pokedex.search
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)
