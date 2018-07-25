import React from 'react'
import PokeListItem from './PokeListItem'

function PokeList (props) {
  return (
    <ul>
      {
        props.pokemons.map(
          pokemon => <PokeListItem key={pokemon.id} pokemon={pokemon} onClick={props.onClick} />
        )
      }
    </ul>
  )
}

PokeList.defaultProps = {
  onClick: function () {}
}

export default PokeList
