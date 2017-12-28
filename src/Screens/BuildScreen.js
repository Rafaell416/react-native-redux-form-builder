import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import FloatingButton from '../Containers/FloatingButton'
import InputCardList from '../Components/InputCardList'


export default class BuildScreen extends Component {
  constructor(props){
    super(props)
  }

  render () {
    const inputs = [
      {
        id: 1,
        name: 'Rafa'
      },
      {
        id: 2,
        name: 'K<3'
      }
    ]
    return (
      <View style={styles.container}>
        <InputCardList inputs={inputs}/>
        <FloatingButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9b59b6',
    flex: 1,
  }
})
