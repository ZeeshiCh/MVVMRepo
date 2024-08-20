import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationService from "../../../navigation/NavigationService";
import ScreenNames from "../../../navigation/ScreenNames";
import Button from "../../../components/Button/Button";
import AppColors from "../../../utils/AppColors/AppColors";

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>LOGO</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Start Your IVF Journey Now</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Continue With Google"
                        backgroundColor={AppColors.downy}
                        textColor={AppColors.white}
                        iconName="logo-google"
                        onPress={() => alert('Continue with Google')}
                    />
                    <Button
                        title="Create a new account"
                        backgroundColor={AppColors.lavenderBlue}
                        textColor={AppColors.white}
                        onPress={() => NavigationService.navigate(ScreenNames.SignUp)}
                    />
                </View>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Already had an account? </Text>
                    <TouchableOpacity onPress={() => NavigationService.navigate(ScreenNames.Login)}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.bgcolor,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    logoContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: AppColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        alignSelf: 'center',
        shadowColor: AppColors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: AppColors.cherryBlossom,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: AppColors.downy,
        textAlign: 'center',
    },
    desc: {
        fontSize: 14,
        color: AppColors.downy,
        textAlign: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 20,
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
