// Screens/UserDetails.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/main-logo.jpg'; // Import your logo image

const Form1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation(); 

  const handleNext = () => {
    if (name && email && phone) {
      // Navigate to MenuScreen
      navigation.navigate('Main'); // Ensure 'Menu' matches your navigation setup
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>QuickEats</Text>
      <View style={styles.cardContainer}>

      <Text>Name</Text>
        <TextInput
          placeholder="Enter your name...."
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Text>Email</Text>
        <TextInput
          placeholder="Enter email...."
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text>Phone</Text>
        <TextInput
          placeholder="Enter phone number...."
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Button title="Next" onPress={handleNext}  color="#DD0B14"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8', // Light background color
  },
  logo: {
    width: 230, // Adjust size as needed
    height: 230,
    marginTop: 70,

  },
  title: {
    fontSize: 32,
    fontWeight: 'bold', // Bold text
    marginBottom: 20,
    textAlign: 'center',
    color: '#CA151C', // Optional: change color as needed
  },
  cardContainer: {
    backgroundColor: '#D8BFD8', // Light purple background color
    borderRadius: 10,
    padding: 20,
    width: '100%', // Make sure it fills the width
    maxWidth: 400, // Optional: constrain width
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default Form1;
