import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'


export default class InputCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }



  render () {
    return (
      <View style={styles.cardContainer}>
        <TextInput
          style={styles.questionInput}
          onChange={(text)=> this.setState({text})}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    height: 200,
    marginBottom: 10,
    elevation: 5,
    padding: 10
  },
  questionInput: {
    height: 40,
    flex: 1,
    borderColor: '#e74c3c',
  }
})
