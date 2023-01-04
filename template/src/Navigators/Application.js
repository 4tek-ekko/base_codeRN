import { PageName } from '@/Config'
import { useAppTheme } from '@/Hooks'
import { DetailScreen } from '@/Screens'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import BottomTab from './BottomTab'
import { navigationRef, screenOptions } from './NavigationUtils'
const Stack = createNativeStackNavigator()
const Application = () => {
  const { NavigationTheme } = useAppTheme()
  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={PageName.HomeTab} component={BottomTab} />
        <Stack.Screen name={PageName.DetailScreen} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Application
