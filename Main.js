import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/splash'; 
import App from './App'; 
import Form1Screen from './screeens/Form1';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Form1" component={Form1Screen} />
        <Stack.Screen name="Main" component={App} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
