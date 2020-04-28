import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import * as firebase from 'firebase'
import {firebaseConfig} from './Config'

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

function App() {
  console.log(" App Screen Render called")
  console.log(firebase.auth)
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen  name="loading" options={{headerShown: false}} component={LoadingScreen} />
          
          <Stack.Screen name="SignUp" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
