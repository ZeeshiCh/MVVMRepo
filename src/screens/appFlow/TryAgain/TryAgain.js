import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";

const { width, height } = Dimensions.get('window');

export default function TryAgain() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/tryagaintop.png')}
                    style={styles.backgroundImage}
                />
                <Image
                    source={require('../../../assets/images/tryagain.png')}
                    style={styles.foregroundImage}
                />
            </View>
            <Text style={styles.text}>Try again!</Text>
            <Text style={styles.textFooter}>Hope is still with you</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.downy,
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
        width: width,
        height: height / 1.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    backgroundImage: {
        position: 'absolute',
        width: width,
        height: '100%',
        resizeMode: 'cover',
        zIndex: 1,
    },
    foregroundImage: {
        position: 'absolute',
        top: 100,
        width: 300,
        height: 300,
        resizeMode: 'contain',
        zIndex: 2,
    },
    text: {
        fontSize: 32,
        color: AppColors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textFooter: {
        fontSize: 24,
        color: AppColors.white,
        textAlign: 'center',
        position: 'absolute',
        bottom: height / 12,
    },
});
