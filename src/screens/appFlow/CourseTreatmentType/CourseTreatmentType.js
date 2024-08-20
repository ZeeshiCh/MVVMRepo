import { StyleSheet, Text, View, Image,Dimensions,TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from "../../../components/Button/Button";
import AppColors from "../../../utils/AppColors/AppColors";
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');


const CourseTreatmentType = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.ProtocolType);
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
                <Text style={styles.footerText}>Select a treatment type course</Text>
            </View>
            <View style={styles.optionsContainer}>
                {['IVF/ICSI', 'FET', 'Egg Freezing', 'IUI', 'Medicated Cycle', 'ERA/Mock FET', 'IVF/ICSI + Fresh Transfer'].map((option, index) => (
                    <TouchableOpacity key={index} style={styles.optionButton}>
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
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

export default CourseTreatmentType;

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
        marginBottom: 50,
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
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: width * 0.9,
        marginBottom: 50,
    },
    optionButton: {
        backgroundColor: AppColors.white,
        borderColor: AppColors.grey,
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        width: (width * 0.9 - 40) / 2,
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: AppColors.downy,
        borderColor: AppColors.downy,
    },
    optionText: {
        fontSize: 14,
        color: AppColors.grey,
    },
    activeButtonText: {
        color: AppColors.white,
    },
});
