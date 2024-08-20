import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function CongratulationTest() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/pregnancy.png')}
                style={styles.foregroundImage}
            />
            <Image
                source={require('../../../assets/images/congratulations/bottom.png')}
                style={styles.backgroundImage}
            />
            <Image
                source={require('../../../assets/images/congratulations/confetti.png')}
                style={styles.confettiImage}
            />
            <Image
                source={require('../../../assets/images/congratulations/fireworks.png')}
                style={styles.fireworksImage}
            />
            <Text style={styles.text}>CONGRATULATIONS!</Text>
            <Text style={styles.textFooter}>We Are Happy For You</Text>
            <Image
                source={require('../../../assets/images/congratulations/fire.png')}
                style={styles.fireworksImage1}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.downy,
        alignItems: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        bottom: 0,
        width: width,
        height: height / 1.5,
        resizeMode: 'cover',
    },
    confettiImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height / 2,
    },
    fireworksImage: {
        position: 'absolute',
        bottom: 200,
        right: 0,
        width: width / 3,
        height: height / 3,
        resizeMode: 'contain',
    },
    fireworksImage1: {
        position: 'absolute',
        bottom: -50,
        left: 0,
        width: width / 4,
        height: height / 4,
        resizeMode: 'contain',
    },
    foregroundImage: {
        marginTop: height / 10,
        width: width * 0.8,
        height: width * 0.8,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 32,
        color: AppColors.white,
        textAlign: 'center',
        paddingHorizontal: 40,
        fontWeight: 'bold',
        marginTop: 230,
    },
    textFooter: {
        fontSize: 24,
        color: AppColors.lightGrey,
        textAlign: 'center',
        paddingHorizontal: 40,
        position: 'absolute',
        bottom: height / 6,
    },
});
