import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const Button = ({ onPress, title, backgroundColor, textColor, iconName }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
            {iconName && <Ionicons name={iconName} size={24} color={textColor} style={styles.icon} />}
            <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 30,
        width: '80%',
        justifyContent: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
    },
    icon: {
        marginRight: 10,
    },
});

export default Button;
