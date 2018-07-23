function rootReducer (state = {}, action) {
  if (action.type === 'INCREMENT_KI') {
    const ki = state.ki !== undefined ? state.ki + 1 : 0
    return Object.assign({}, state, { ki })
  }

  return state
}

function createStore (reducer) {
  var state

  const getState = function () {
    return state
  }

  const dispatch = function (action) {
    state = reducer(state, action)
  }

  return { getState, dispatch }
}

const STORE = createStore(rootReducer)

STORE.dispatch({ type: 'INCREMENT_KI' })
console.log(STORE.getState())
STORE.dispatch({ type: 'INCREMENT_KI' })
console.log(STORE.getState())
