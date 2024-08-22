import React, { useContext } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet, Alert } from 'react-native';
import { CartContext } from '../context/CartContext';
import PaymentForm from './PaymentForm';

const Cart = ({ navigation }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Function to calculate the total cost of items in the cart
  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    Alert.alert(
      'Proceed to Checkout',
      `Your total is R${getTotalCost()}. Do you want to proceed to checkout?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => {
            Alert.alert('Checkout', 'Thank you for your purchase!');
            // Clear the cart after checkout (optionally remove all items)
            // You can either use a function from your context or directly manipulate the state here
            removeFromCart(); // Adjust this if necessary
            navigation.navigate('PaymentForm');
          } 
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
                <Button title="Remove" onPress={() => removeFromCart(item.id)} />
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}

      <View style={styles.summary}>
        <Text style={styles.totalText}>Total: R{getTotalCost()}</Text>
        <Button 
          title="Proceed to Checkout" 
          onPress={handleCheckout} 
          disabled={cartItems.length === 0} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#D8BFD8', // Light purple background color
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: 'white', // Light Beige background color
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CA151C', // Bright Red for text
  },
  price: {
    fontSize: 16,
    color: '#DD0B14', // Deep Red for text
  },
  summary: {
    borderTopWidth: 1,
    borderTopColor: '#CA151C', // Red border
    paddingTop: 16,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CA151C',
    marginBottom: 16,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#CA151C',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Cart;
