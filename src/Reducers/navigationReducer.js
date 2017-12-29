import {Tabs} from '../Navigation/Router'

const initialState = Tabs.router.getStateForAction(
  Tabs.router.getActionForPathAndParams('BuildScreen')
)

const navigationReducer = (state = initialState, action) => {
  const newState = Tabs.router.getStateForAction(action, state)
  return newState || state
}

export default navigationReducer
