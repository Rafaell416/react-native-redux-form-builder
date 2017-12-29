import React, { Component } from 'react'
import AppNavigation from './src/Navigation'
import {applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './src/Reducers'
import {saveState, loadState} from './localStorage'


export default class App extends Component {
  constructor(props){
    super(props)
  }

/*
  const persistedState = loadState()
  const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(logger)
  )

  store.subscribe(()=>{
    saveState({
      inputs: store.getState().inputs
    })
  })
*/

  render() {
    const store = createStore(reducer, applyMiddleware(logger))
    return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
    )
  }
}
