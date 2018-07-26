import React from 'react'

function Search (props) {
  return (
    <form>
      <input onChange={props.onChange} value={props.query} />
    </form>
  )
}

Search.defaultProps = {
  onChange: function () {},
  query: ''
}

export default Search
