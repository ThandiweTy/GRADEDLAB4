import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { UserContext } from '../context/UserContext'; // Adjust path as needed

export default function ProfileScreen() {
  const { user } = useContext(UserContext); // Ensure context is used correctly

  if (!user) {
    return <Text>Loading...</Text>; // Fallback UI while loading user
  }

  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.card}>
      <View style={styles.section}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{user.phone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}> Address:</Text>
        <Text style={styles.value}>{user.address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>City:</Text>
        <Text style={styles.value}>{user.city}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Zipcode:</Text>
        <Text style={styles.value}>{user.zipcode}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>State:</Text>
        <Text style={styles.value}>{user.state}</Text>
      </View>


     
      <View style={styles.customizationSection}>
        <Text style={styles.label}>Customize Theme:</Text>

        {/* Text Color */}
        <TextInput
          style={styles.input}
          placeholder="Enter Text Color (e.g., #FF5733)"
          
        />

        {/* Background Color */}
        <TextInput
          style={styles.input}
          placeholder="Enter Background Color (e.g., #FFFFFF)"
          
        />

      </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    
    backgroundColor: '#D8BFD8', // Default background color
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff', // Light Beige background color
    borderRadius: 8,
  },
  section: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  customizationSection: {
    marginTop: 30,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
