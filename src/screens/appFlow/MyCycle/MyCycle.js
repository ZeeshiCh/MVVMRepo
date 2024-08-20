import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from "../../../components/Button/Button";
import AppColors from "../../../utils/AppColors/AppColors";
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const MyCycle = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.CourseStartDate);
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/mycycle.png')}
                    style={styles.image}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.footerText}>Let's get your cycle Started</Text>
                <Text style={styles.footerText1}>We recommend entering your previous cycles so Embie can show how your current cycle is progressing compared to previous treatments. You can add additional courses at any time in the Previous Courses tab under your profile section of the app.</Text>
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

export default MyCycle;

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
