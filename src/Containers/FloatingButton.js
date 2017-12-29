import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { addInput } from '../Actions'

class Button extends Component {

  _addInput = () => {
    let questionText = 'type a question here?'
    let questionType = 'yes/no'
    let AddInput = this.props
    AddInput(questionText, questionType)
  }

  render () {
    return (
      <TouchableNativeFeedback onPress={()=>this._addInput()} style={styles.position}>
        <View style={styles.float}>
          <Ionicons name="md-add" size={35} color='white'/>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const mapDispatchToProps = {
  AddInput: addInput
}

const FloatingButton = connect(mapDispatchToProps)(Button)
export default FloatingButton



const styles = StyleSheet.create({
  float:{
    borderRadius: 50,
    backgroundColor: '#c0392b',
    height: 60,
    width: 60,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, //20
    marginRight: 20, //20
    shadowColor: 'black',
    shadowOpacity: .3,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 5,
    borderBottomColor: '#ecf0f1',
    borderTopColor: '#ecf0f1',
    borderLeftColor: '#ecf0f1',
    borderRightColor: '#ecf0f1',
    borderWidth: 0.1,
    position: 'absolute',
    top: 500,
    right: 0,
  },
  position: {

  }
})
