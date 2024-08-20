import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AppColors from "../../../utils/AppColors/AppColors";
import Button from "../../../components/Button/Button";
import CustomTextInput from "../../../components/TextInput/TextInput";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

export default function ForgetPassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>LOGO</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Forgot your password?</Text>
                <Text style={styles.desc}>Enter your email below to retrieve your username</Text>
                <CustomTextInput
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Recover password"
                    backgroundColor={AppColors.downy}
                    textColor={AppColors.white}
                    onPress={() => NavigationService.navigate(ScreenNames.ChangePassword)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.lavenderBlue,
        alignItems: 'center',
        padding: 20,
        paddingTop: 100,
    },
    logoContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: AppColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: AppColors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15,
        marginBottom: 50,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: AppColors.cherryBlossom,
    },
    contentContainer: {
        width: '100%',
        alignItems: 'left',
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: AppColors.white,
        textAlign: 'left',
        marginBottom: 10,
    },
    desc: {
        fontSize: 14,
        color: AppColors.white,
        textAlign: 'left',
        marginBottom: 20,
    },
    input: {
        marginTop: 10,
        width: '100%',
    },
    buttonContainer: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
        marginBottom:60,
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
