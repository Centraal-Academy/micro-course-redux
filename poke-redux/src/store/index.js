import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import { rootReducer } from '../reducer'
import sagaMiddlewareCreator from 'redux-saga'
import rootSaga from '../sagas'

const sagaMiddleware = sagaMiddlewareCreator()

export default createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
