import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomTextInput from "../../../components/TextInput/TextInput";
import { useNavigation } from '@react-navigation/native';
import Button from "../../../components/Button/Button";
import AppColors from "../../../utils/AppColors/AppColors";
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

export default function ConfirmPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Choose and confirm the password</Text>
            </View>
            <CustomTextInput
                placeholder="Enter the password"
                value={password}
                onChangeText={setPassword}
            />
            <CustomTextInput
                placeholder="Confirm password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                keyboardType="password"
            />
            <Button
                title="NEXT"
                backgroundColor={AppColors.lavenderBlue}
                textColor="white"
                onPress={() => NavigationService.navigate(ScreenNames.Congratulation)}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.bgcolor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    textContainer: {
        width: '100%',
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        color: AppColors.downy,
        marginBottom: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        backgroundColor: AppColors.white,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
});
