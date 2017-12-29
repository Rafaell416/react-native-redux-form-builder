 import { combineReducers } from 'redux'
 import inputs from './inputs'
 import navigationReducer from './navigationReducer'

const formBuilder = combineReducers({
  inputs,
  navigationReducer
})

export default formBuilder
