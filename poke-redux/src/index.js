import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

const appContainer = document.getElementById('app-container')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  appContainer
)
