import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/Login'
import MyDrawer from './src/components/DrawerNavigator'
import BootSplash from 'react-native-bootsplash'

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  '[Reanimated] Dependencies should only be used on the web',
]);

const Stack = createNativeStackNavigator()

const App = () => {


  useEffect(() => {
    BootSplash.hide({ fade: true })
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='MyDrawer' component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App