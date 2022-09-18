
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Login';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Screen_A Title',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Screen_B Title',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;