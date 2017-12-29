import React, { Component } from 'react'
import AppNavigation from './src/Navigation'
import {applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './src/Reducers'

export default class App extends Component {
  constructor(props){
    super(props)
  }


  render() {

    const store = createStore(reducer, applyMiddleware(logger))

    return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
    )
  }
}
