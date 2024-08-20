import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import AppColors from "../../../utils/AppColors/AppColors";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import Header from "../../../components/Header/Header";
import NavigationService from "../../../navigation/NavigationService";
import ScreenNames from "../../../navigation/ScreenNames";

export default function ChangePassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
            <Header headerText="Change Password" />
            <View style={styles.contentContainer}>
                <TextInput
                    placeholder="Old Password"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="New Password"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Confirm Password"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Save Changes"
                    backgroundColor={AppColors.lavenderBlue}
                    textColor={AppColors.white}
                    onPress={() => NavigationService.navigate(ScreenNames.Login)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: 20,
        alignItems: 'center',
    },
    contentContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 50,
    },
    input: {
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        height: 50,
        width: '100%',
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
        marginBottom: 60,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    footerText: {
        color: AppColors.grey,
        fontSize: 14,
    },
    loginText: {
        fontSize: 14,
        color: AppColors.downy,
        fontWeight: 'bold',
    },
});
