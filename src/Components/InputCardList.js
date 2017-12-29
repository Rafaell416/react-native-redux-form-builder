import React, { Component } from 'react'
import {
  ListView,
  View
 } from 'react-native'

import InputCard from '../Components/InputCard'

export default class InputCardList extends Component {

  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  componentDidMount () {
    this.updateDataSource(this.props.inputs)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.inputs !== this.props.inputs) {
      this.transform(newProps.inputs)
   }
  }

  transform = (data) => {
    this.updateDataSource(data)
  }

  render(){
    return (
      <ListView
        enableEmptySections = { true }
        dataSource={this.state.dataSource}
        renderRow={(input) =>
          <InputCard
            input={input}
            updateInputText={this.props.updateInputText}
            updateInputSelect={this.props.updateInputSelect}
            deleteInput={this.props.deleteInput}
          />
        }
          removeClippedSubviews={false}
        />
    )

  }
}
