import React from 'react'
import {
  TabNavigator,
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import BuildScreen from '../Screens/BuildScreen'
import FormScreen from '../Screens/FormScreen'

export const Tabs = TabNavigator({
  BuildScreen: {
    screen: BuildScreen,
    navigationOptions: {
      title: 'Build',
      tabBarIcon: ({tintColor}) => <Ionicons name="md-build" size={32} color={tintColor} />
    }
  },
  FormScreen: {
    screen: FormScreen,
    navigationOptions: {
      title: 'Form',
      tabBarIcon: ({tintColor}) => <Ionicons name="md-list-box" size={32} color={tintColor} />
    }
  }
},{
  tabBarOptions: {
    showIcon: true,
    tabStyle: {
       marginTop: 30
     }
  }
})
