import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomePage from './src/Pages/HomePage';

const Stack = createStackNavigator();

class App extends React.Component {
  render() { 
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='homePage'>
          <Stack.Screen name='homePage' component={HomePage}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
 
export default App;