import React from 'react'
import { connect } from 'react-redux'
import Container from '../Container'
import Search from './Search'
import PokeList from './PokeList'
import { fetchPokemons } from '../../actions'

class Pokedex extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchPokemons())
  }

  render () {
    return (
      <Container>
        <Search />
        <PokeList pokemons={this.props.pokemons} />
      </Container>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    pokemons: Object.values(state.pokedex.pokemons)
  }
}

export default connect(mapStateToProps)(Pokedex)
