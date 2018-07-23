function rootReducer (state = { ki: 0 }, action) {
  if (action.type === 'INCREMENT_KI') {
    return Object.assign({}, state, { ki: state.ki + 1 })
  }

  return state
}

function createStore (reducer) {
  var state
  const suscriptors = []

  const getState = function () {
    return state
  }

  const dispatch = function (action) {
    state = reducer(state, action)
    suscriptors.forEach(suscriptor => { suscriptor() })
  }

  const suscribe = function (suscriptor) {
    suscriptors.push(suscriptor)
  }

  return { getState, dispatch, suscribe }
}

function printKi () {
  console.log(STORE.getState())
}

const STORE = createStore(rootReducer)
STORE.suscribe(printKi)

STORE.dispatch({ type: 'INCREMENT_KI' })
STORE.dispatch({ type: 'INCREMENT_KI' })
