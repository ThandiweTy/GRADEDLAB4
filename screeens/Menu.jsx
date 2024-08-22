import React, { useContext } from 'react';
import { FlatList, Text, View, Button, Image, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const MenuScreen = () => {
  const { addToCart } = useContext(CartContext);

  const foodItems = [
    { id: '1', name: 'Pizza', description: 'Cheesy pizza', price: 150.00, image: require('../assets/pizza.jpg') },
    { id: '2', name: 'Burger', description: 'Juicy burger', price: 99.99, image: require('../assets/burger.jpg') },
    { id: '3', name: 'Sushi Platter', description: 'Sushi', price: 189.99, image: require('../assets/sushi.jpg') },
    { id: '4', name: 'Pasta', description: 'Calamari Pasta', price: 259.99, image: require('../assets/pasta.jpg') },
    { id: '5', name: 'Grilled Chicken', description: 'Flaming Grilled Chicken', price: 129.99, image: require('../assets/chicken.jpg') },
    { id: '6', name: 'Wings & Chips', description: 'Hot Wings', price: 79.99, image: require('../assets/wings.jpg') },
    { id: '7', name: 'Ribs Platter', description: 'Juicy Ribs', price: 199.99, image: require('../assets/ribs.jpg') },
    { id: '8', name: 'Stir Fry Rice', description: 'Prawns Stir Fry Rice', price: 69.99, image: require('../assets/rice.jpg') },
    { id: '9', name: 'Taco', description: 'Juicy burger', price: 99.99, image: require('../assets/taco.jpg') },
    // ...other items
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={foodItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>R{item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8BFD8', // Light purple background color
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff', // Light Beige background color
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 150,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CA151C', // Bright Red for text
  },
  description: {
    fontSize: 14,
    color: '#CA1619', // Dark Red for text
  },
  price: {
    fontSize: 16,
    color: '#DD0B14', // Deep Red for text
  },
});

export default MenuScreen;
