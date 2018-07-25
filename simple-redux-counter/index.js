/* global Redux */
const CALCULATOR_ADD = 'CALCULATOR_ADD'
const CALCULATOR_SUBSTRACT = 'CALCULATOR_SUBSTRACT'

function add (value) {
  return {
    type: CALCULATOR_ADD,
    value
  }
}

function substract (value) {
  return {
    type: CALCULATOR_SUBSTRACT,
    value
  }
}

function rootReducer (state = {counter: 0}, action) {
  switch (action.type) {
    case CALCULATOR_ADD:
      return Object.assign({}, state, { counter: state.counter + action.value })
    case CALCULATOR_SUBSTRACT:
      return Object.assign({}, state, { counter: state.counter - action.value })
    default:
      return state
  }
}

const store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function updateUI () {
  document.getElementById('result').innerText = store.getState().counter
}

store.subscribe(updateUI)

document.getElementById('add').addEventListener('click', (e) => {
  e.preventDefault()
  store.dispatch(add(1))
})
document.getElementById('substract').addEventListener('click', (e) => {
  e.preventDefault()
  store.dispatch(substract(1))
})
