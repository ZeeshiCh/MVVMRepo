import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from "../../../../components/Button/Button";
import AppColors from "../../../../utils/AppColors/AppColors";
import ScreenNames from "../../../../navigation/ScreenNames";
import NavigationService from "../../../../navigation/NavigationService";

const Info1 = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.Info2);
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../../assets/images/info1bg.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../../assets/images/info1.png')}
                    style={styles.overlayImage}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.footerText}>You just need to answer a few short questions</Text>
                <Text style={styles.footerText1}>This is Demi's question and its summary. This is Demi's question and its summary</Text>
            </View>
            <Button
                title="I am ready!"
                backgroundColor={AppColors.downy}
                textColor="white"
                onPress={handlePress}
            />
        </View>
    );
};

export default Info1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    imageContainer: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    overlayImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        top: 0,
    },
    textContainer: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 30,
    },
    footerText: {
        fontSize: 28,
        color: AppColors.grey,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    footerText1: {
        color: AppColors.grey,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 50,
    },
});
