import React from 'react'
import Pokemon from './Pokemon'

function PokeListItem (props) {
  return (
    <li onClick={() => props.onClick(props.pokemon)}>
      <Pokemon {...props.pokemon} />
    </li>
  )
}

export default PokeListItem
