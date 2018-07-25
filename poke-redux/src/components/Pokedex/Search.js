import React from 'react'

function Search (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input />
    </form>
  )
}

Search.defaultProps = {
  onSubmit: function () {}
}

export default Search
