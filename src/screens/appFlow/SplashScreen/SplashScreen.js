import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { observer } from 'mobx-react';
import AppColors from "../../../utils/AppColors/AppColors";
import ScreenNames from "../../../navigation/ScreenNames";
import navigationService from "../../../navigation/NavigationService";

const SplashScreen = observer(({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigationService.navigate(ScreenNames.LanguageSelection);
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.circleLarge}></View>
            <View style={styles.circleMedium}></View>
            <View style={styles.circleSmall}></View>
            <View style={styles.circleMini}></View>
            <View style={styles.circleContainer}>
                <Text style={styles.logoText}>LOGO</Text>
            </View>
            <Text style={styles.footerText}>IVF clinic app</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.downy,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleLarge: {
        position: 'absolute',
        top: -100,
        right: -150,
        width: 500,
        height: 500,
        borderRadius: 250,
        backgroundColor: AppColors.downyCircle,
    },
    circleMedium: {
        position: 'absolute',
        bottom: 130,
        left: -100,
        width: 340,
        height: 340,
        borderRadius: 170,
        backgroundColor: AppColors.lavenderBlue,
    },
    circleSmall: {
        position: 'absolute',
        top: 170,
        left: 35,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.cherryBlossom,
    },
    circleMini: {
        position: 'absolute',
        bottom: 170,
        right: 35,
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: AppColors.white_30,
    },
    circleContainer: {
        width: 500,
        height: 500,
        borderRadius: 250,
        backgroundColor: AppColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    logoText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: AppColors.downy,
    },
    footerText: {
        position: 'absolute',
        bottom: 100,
        fontSize: 22,
        color: AppColors.white,
        fontWeight: 'bold',
    },
});

export default SplashScreen;

