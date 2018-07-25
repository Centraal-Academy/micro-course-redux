import { combineReducers } from 'redux'
import pokedex from './pokedex'
import detail from './detail'

export const rootReducer = combineReducers({
  pokedex,
  detail
})
