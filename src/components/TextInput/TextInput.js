import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const CustomTextInput = ({
                             placeholder,
                             value,
                             onChangeText,
                             secureTextEntry = false,
                             keyboardType = 'default',
                             style,
                             ...props
                         }) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                {...props}
            />
        </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 30,
    },
});
