import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import AppColors from "../../utils/AppColors/AppColors";

const WhiteButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.white,
        borderRadius: 10,
        paddingHorizontal: 100,
        paddingVertical: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: 20,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppColors.downy,
    },
});

export default WhiteButton;
