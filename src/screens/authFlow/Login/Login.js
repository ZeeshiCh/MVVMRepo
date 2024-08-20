import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AppColors from "../../../utils/AppColors/AppColors";
import Button from "../../../components/Button/Button";
import CustomTextInput from "../../../components/TextInput/TextInput";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

export default function Login() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>LOGO</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Welcome back</Text>
                <CustomTextInput
                    placeholder="email or username"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />
                <CustomTextInput
                    placeholder="password"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',alignContent:'space-between',alignItems:'stretch',alignSelf:'stretch'}}>
                <TouchableOpacity onPress={() => NavigationService.navigate(ScreenNames.ForgetUsername)}>
                    <Text style={{color:AppColors.white,fontSize:16}}>Forget Username?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NavigationService.navigate(ScreenNames.ForgetPassword)}>
                    <Text style={{color:AppColors.white,fontSize:16}}>Forget Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="NEXT"
                    backgroundColor={AppColors.lavenderBlue}
                    textColor={AppColors.white}
                    onPress={() => NavigationService.navigate(ScreenNames.Info1)}
                />

            </View>
            <Button
                title="Continue With Google"
                backgroundColor={AppColors.white}
                textColor={AppColors.black}
                iconName="logo-google"
                onPress={() => alert('Continue with Google')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.downy,
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
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: AppColors.white,
        textAlign: 'center',
        marginBottom: 40,
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
