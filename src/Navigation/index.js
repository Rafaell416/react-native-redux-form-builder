import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import { Tabs } from './Router'


class AppNavigation extends Component {
  render () {
    const { navigationState, dispatch } = this.props
    return (
      <Tabs
        navigation={addNavigationHelpers({
          dispatch,
          state: navigationState
        })}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  navigationState: state.navigationReducer
})

export default connect(mapStateToProps)(AppNavigation)
