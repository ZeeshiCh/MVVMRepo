import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppColors from "../../../../utils/AppColors/AppColors";
import ScreenNames from "../../../../navigation/ScreenNames";
import NavigationService from "../../../../navigation/NavigationService";

export default function Info5() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            NavigationService.navigate(ScreenNames.BottomTabNavigator);
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.circleLarge}></View>
            <View style={styles.circleMedium}></View>
            <View style={styles.circleSmall}></View>
            <View style={styles.circleSmall1}></View>
            <View style={styles.circleSmall2}></View>
            <View style={styles.circleMini}></View>

            <View style={styles.textContainer}>
                <Text style={styles.footerText}>You are all set!</Text>
                <Text style={styles.footerText1}>Your account has been created successfully</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.downyBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleLarge: {
        position: 'absolute',
        top: -270,
        right: -150,
        width: 500,
        height: 500,
        borderRadius: 250,
        backgroundColor: AppColors.lavenderBlue,
    },
    circleMedium: {
        position: 'absolute',
        bottom: -250,
        left: -100,
        width: 540,
        height: 540,
        borderRadius: 270,
        backgroundColor: AppColors.lavenderBlue,
    },
    circleSmall: {
        position: 'absolute',
        top: 200,
        right: 35,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.cherryBlossom,
    },
    circleSmall1: {
        position: 'absolute',
        bottom: 50,
        right: 5,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.cherryBlossom,
    },
    circleSmall2: {
        position: 'absolute',
        bottom: 240,
        left: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.cherryBlossom,
    },
    circleMini: {
        position: 'absolute',
        bottom: 150,
        right: 0,
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: AppColors.white_20,
    },
    textContainer: {
        alignItems: 'center',
    },
    footerText: {
        fontSize: 28,
        color: AppColors.white,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    footerText1: {
        color: AppColors.white,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
    },
});
