import { BottomTabBar } from '@/Components'
import { PageName } from '@/Config'
import {
  ExampleScreen,
  HomeScreen,
  MenuScreen,
  SubHomeScreen,
  SubMenuScreen,
} from '@/Screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { screenOptions } from './NavigationUtils'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={screenOptions}
    >
      <Tab.Screen name={PageName.HomeStack} component={HomeStack} />
      <Tab.Screen name={PageName.MenuStack} component={MenuStack} />
    </Tab.Navigator>
  )
}
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={PageName.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={PageName.SubHomeScreen} component={SubHomeScreen} />
      <Stack.Screen name={PageName.ExampleScreen} component={ExampleScreen} />
    </Stack.Navigator>
  )
}
const MenuStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={PageName.MenuScreen} component={MenuScreen} />
      <Stack.Screen name={PageName.SubMenuScreen} component={SubMenuScreen} />
    </Stack.Navigator>
  )
}

export default BottomTab
