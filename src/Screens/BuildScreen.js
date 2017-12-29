import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import FloatingButton from '../Containers/FloatingButton'
import InputCardList from '../Components/InputCardList'
import { connect } from 'react-redux'
import {
  addInput,
  updateInputText,
  updateInputSelect,
  deleteInput
} from '../Actions'

class Build extends Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <InputCardList
          inputs={this.props.inputs}
          updateInputText={this.props.updateInputText}
          deleteInput={this.props.deleteInput}
          updateInputSelect={this.props.updateInputSelect}
        />
        <FloatingButton
          addInput={this.props.addInput}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  inputs: state.inputs
})

const mapDispatchToProps = {
  addInput,
  updateInputText,
  updateInputSelect,
  deleteInput
}

const BuildScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Build)
export default BuildScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  }
})
