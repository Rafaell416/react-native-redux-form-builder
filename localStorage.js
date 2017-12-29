import {
  AsyncStorage
} from 'react-native'

export const saveState =  async(state) => {
  try {
    const serializedState = JSON.stringify(state)
    await AsyncStorage.setItem('state', serializedState)
  } catch (e) {
    console.log('There was an error', e)
  }
}

export const loadState = async () => {
  try {
    const serializedState = await AsyncStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}
