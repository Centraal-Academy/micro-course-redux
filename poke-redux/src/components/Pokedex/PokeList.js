import React from 'react'
import PokeListItem from './PokeListItem'
function makeFilter (query) {
  return function filter (pokemon) {
    return pokemon.name.toLowerCase().includes(query.toLowerCase())
  }
}

function PokeList (props) {
  let pokemons
  if (props.filter) {
    const filter = makeFilter(props.filter)
    pokemons = props.pokemons.filter(filter)
  } else {
    pokemons = props.pokemons
  }
  return (
    <ul>
      {
        pokemons.map(
          pokemon => <PokeListItem key={pokemon.id} pokemon={pokemon} onClick={props.onClick} />
        )
      }
    </ul>
  )
}

PokeList.defaultProps = {
  onClick: function () {},
  pokemons: []
}

export default PokeList
