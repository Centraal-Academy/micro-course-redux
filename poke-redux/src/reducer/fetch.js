export function loadingReducer (state = {}) {
  return { ...state, loading: true, success: false, error: false }
}

export function successReducer (state = {}) {
  return { ...state, loading: false, success: true, error: false }
}

export function errorReducer (state = {}) {
  return { ...state, loading: false, success: false, error: true }
}

export function fetchHOReducer (sectionName) {
  return function fetchReducer (state = {}, action) {
    switch (action.type) {
      case `FETCH_${sectionName}_LOADING`:
        return loadingReducer(state)
      case `FETCH_${sectionName}_SUCCESS`:
        return successReducer(state)
      case `FETCH_${sectionName}_ERROR`:
        return errorReducer(state)
      default:
        return state
    }
  }
}

export function fetchHOReducer2 (reducerFunction, reducerName) {
  return function highOrder (state = {}, action) {
    const {name} = action
    if (name !== reducerName) {
      return state
    }
    return reducerFunction(state, action)
  }
}

export function fetchReducer (state = {}, action) {
  switch (action.type) {
    case `FETCH_LOADING`:
      return loadingReducer(state)
    case `FETCH_SUCCESS`:
      return successReducer(state)
    case `FETCH_ERROR`:
      return errorReducer(state)
    default:
      return state
  }
}
