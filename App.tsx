import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/Login'
import Dashboard from './src/screens/Dashboard'
import MyDrawer from './src/components/DrawerNavigator'

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  '[Reanimated] Dependencies should only be used on the web',
]);

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='Login' component={Login} /> */}
        <Stack.Screen name='MyDrawer' component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App