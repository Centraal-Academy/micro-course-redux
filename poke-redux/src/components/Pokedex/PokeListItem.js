import React from 'react'
import Pokemon from './Pokemon'

function PokeListItem (props) {
  return (
    <li onClick={props.onClick ? props.onClick(props.pokemon) : null}>
      <Pokemon {...props.pokemon} />
    </li>
  )
}

export default PokeListItem
