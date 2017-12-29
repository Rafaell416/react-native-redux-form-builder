import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import FloatingButton from '../Containers/FloatingButton'
import InputCardList from '../Components/InputCardList'
import { connect } from 'react-redux'
import { addInput } from '../Actions'

class Build extends Component {
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
  addInput
}

const BuildScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Build)
export default BuildScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9b59b6',
    flex: 1,
  }
})
