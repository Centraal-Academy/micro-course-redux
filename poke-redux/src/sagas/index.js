/* global fetch */
import { FETCH_POKEMON } from '../actions/types'
import { loadingPokedexPokemons, addPokemons } from '../actions'
import { call, put, takeEvery } from 'redux-saga/effects'

export function * fetchPokemonsSaga () {
  yield put(loadingPokedexPokemons(true))
  const response = yield call(fetch, 'http://localhost:3000/pokemons')
  const pokemons = yield response.json()
  yield put(loadingPokedexPokemons(false))
  yield put(addPokemons(pokemons))
}

export default function * rootSaga () {
  yield takeEvery(FETCH_POKEMON, fetchPokemonsSaga)
}
