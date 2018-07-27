import {fetchHOReducer2, fetchReducer} from './fetch'

const fetchState = fetchHOReducer2(fetchReducer, 'detail') // fetchHOReducer('DETAIL')
export default function (state = {}, action) {
  if (action.type.startsWith('FETCH_')) {
    return {
      ...fetchState(state, action)
    }
  }
  return state
}
