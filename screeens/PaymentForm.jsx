import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const PaymentForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});
    const [cartItems, setCartItems] = useState('')

    const validateCardNumber = (number) => /^[0-9]{16}$/.test(number.replace(/\s+/g, ''));
    const validateExpirationDate = (month, year) => {
        const monthNum = parseInt(month, 10);
        const yearNum = parseInt(year, 10);
        const today = new Date();
        return monthNum >= 1 && monthNum <= 12 && yearNum >= today.getFullYear();
    };
    const validateCVV = (cvv) => /^[0-9]{3}$/.test(cvv);

    const handleSubmit = () => {
        const cardNumberValid = validateCardNumber(cardNumber);
        const expDateValid = validateExpirationDate(expMonth, expYear);
        const cvvValid = validateCVV(cvv);

        if (cardNumberValid && expDateValid && cvvValid) {
            Alert.alert('Success', 'Form submitted successfully!');
            // Handle form submission here
        } else {
            setErrors({
                cardNumber: !cardNumberValid ? 'Invalid card number' : '',
                expDate: !expDateValid ? 'Invalid expiration date' : '',
                cvv: !cvvValid ? 'Invalid CVV' : '',
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Credit Card Number:</Text>
            <TextInput
                style={[styles.input, errors.cardNumber && styles.error]}
                value={cardNumber}
                onChangeText={setCardNumber}
                placeholder="1234 5678 9012 3456"
                maxLength={16}
                keyboardType="numeric"
            />
            {errors.cardNumber ? <Text style={styles.errorText}>{errors.cardNumber}</Text> : null}

            <Text style={styles.label}>Expiration Date:</Text>
            <View style={styles.expirationContainer}>
                <TextInput
                    style={[styles.input, errors.expDate && styles.error]}
                    value={expMonth}
                    onChangeText={setExpMonth}
                    placeholder="MM"
                    maxLength={2}
                    keyboardType="numeric"
                />
                <TextInput
                    style={[styles.input, errors.expDate && styles.error]}
                    value={expYear}
                    onChangeText={setExpYear}
                    placeholder="YYYY"
                    maxLength={4}
                    keyboardType="numeric"
                />
            </View>
            {errors.expDate ? <Text style={styles.errorText}>{errors.expDate}</Text> : null}

            <Text style={styles.label}>CVV:</Text>
            <TextInput
                style={[styles.input, errors.cvv && styles.error]}
                value={cvv}
                onChangeText={setCvv}
                placeholder="123"
                maxLength={3}
                keyboardType="numeric"
            />
            {errors.cvv ? <Text style={styles.errorText}>{errors.cvv}</Text> : null}

            <Button title="Submit" onPress={handleSubmit} disabled={!cardNumber || !expMonth || !expYear || !cvv} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#D8BFD8',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    expirationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    error: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 12,
    },
});

export default PaymentForm;
