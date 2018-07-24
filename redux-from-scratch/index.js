const INCREMENT_KI = {
  type: 'INCREMENT_KI'
}
function rootReducer (state = { ki: 0 }, action) {
  if (action.type === 'INCREMENT_KI') {
    return Object.assign({}, state, { ki: state.ki + 1 })
  }

  return state
}

function createStore (reducer) {
  var state
  const listeners = []

  const getState = function () {
    return state
  }

  const dispatch = function (action) {
    state = reducer(state, action)
    listeners.forEach(listener => { listener() })
  }

  const suscribe = function (listener) {
    listeners.push(listener)
  }

  return { getState, dispatch, suscribe }
}

function printKi () {
  console.log(STORE.getState())
}

function kaioken () {
  const state = STORE.getState()
  console.log('Kaiokeeeeeeeen', state.ki * 1000)
}

const STORE = createStore(rootReducer)
STORE.suscribe(printKi)
STORE.suscribe(kaioken)

STORE.dispatch(INCREMENT_KI)
STORE.dispatch(INCREMENT_KI)
