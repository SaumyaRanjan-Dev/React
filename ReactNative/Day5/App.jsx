import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import Search from './src/Screens/Search';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home Screen' }} 
      />
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{ title: 'Profile Screen' }} 
      />
      <Stack.Screen 
        name="Search" 
        component={Search} 
        options={{ title: 'Search Screen' }} 
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
