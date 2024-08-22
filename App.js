import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Import the stack navigator
import { MaterialIcons } from '@expo/vector-icons'; 
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

// Import screens
import MenuScreen from './screeens/Menu';
import Cart from './screeens/Cart';
import ProfileScreen from './screeens/profiles';
import PaymentForm from './screeens/PaymentForm'; // Import the PaymentForm screen
import Form1 from './screeens/Form1'; // Import Form1

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // Create a stack navigator

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Form1">
            <Stack.Screen 
              name="Form1" 
              component={Form1} 
              options={{ headerShown: false }} // Hide the header for Form1
            />
            <Stack.Screen name="PaymentForm" component={PaymentForm} />

            <Stack.Screen 
              name="Main" 
              component={() => (
                <Tab.Navigator>
                  <Tab.Screen 
                    name="Menu" 
                    component={MenuScreen} 
                    options={{
                      tabBarIcon: () => (
                        <MaterialIcons name="restaurant-menu" size={28} color="#DD0B14" />
                      )
                    }} 
                  />
                  <Tab.Screen 
                    name="Cart" 
                    component={Cart} 
                    options={{
                      tabBarIcon: () => (
                        <MaterialIcons name='shopping-cart' size={28} color="#DD0B14"/>
                      )
                    }}
                  />
                  <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen} 
                    options={{
                      tabBarIcon: () => (
                        <MaterialIcons name='person' size={28} color="#DD0B14"/>
                      )
                    }}
                  />
                </Tab.Navigator>
              )}
              options={{ headerShown: false }} // Hide the header for the tab navigator
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
