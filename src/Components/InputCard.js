import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  TouchableNativeFeedback
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'


export default class InputCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      text: '',
      language: ''
    }
  }

  render () {
    const id = this.props.input.id
    const updateInputText = this.props.updateInputText
    const deleteInput = this.props.deleteInput
    return (
      <View style={styles.cardContainer}>
        <View style={styles.componentsContainer}>
          <View style={styles.questionView}>
            <Text style={styles.label}>Question</Text>
            <TextInput
              style={styles.questionInput}
              onChange={(text)=> this.setState({text})}
              // onBlur={(text)=> updateInputText(id, text)}
              placeholder='Type a question..'
            />
          </View>
          <View style={styles.pickerView}>
            <Text style={styles.label}>Question Type</Text>
            <Picker
              style={styles.picker}
              mode={'dropdown'}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="Yes/No" value="yes/no" />
              <Picker.Item label="Number" value="number" />
              <Picker.Item label="Text" value="text" />
            </Picker>
          </View>
          <TouchableNativeFeedback onPress={()=>deleteInput(id)} >
            <Ionicons style={styles.deleteIcon} name="md-trash" size={20} color='#34495e'/>
          </TouchableNativeFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    height: 160,
    marginBottom: 10,
    elevation: 5,
  },
  componentsContainer: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    padding: 10
  },
  questionView: {
    backgroundColor: '#ecf0f1',
    marginBottom: 10
  },
  questionInput: {
    height: 40,
    borderColor: '#ecf0f1',
  },
  pickerView: {
    backgroundColor: '#ecf0f1',
    height: 50
  },
  picker: {
    flex: 1
  },
  label: {
    color: '#95a5a6'
  },
  deleteIcon: {
    alignSelf: 'flex-end'
  }
})
