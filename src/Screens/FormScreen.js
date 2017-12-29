import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'


export default class FormScreen extends Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Welcome to the form</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c0392b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
