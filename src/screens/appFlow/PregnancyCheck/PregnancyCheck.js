import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function PregnancyCheck() {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigation = useNavigation();

    const handleOptionPress = (option) => {
        setSelectedOption(option);
    };

    const handleNextPress = () => {
        if (selectedOption === 'Yes') {
            NavigationService.navigate(ScreenNames.CongratulationTest);
        } else if (selectedOption === 'No') {
            NavigationService.navigate(ScreenNames.TryAgain);
        } else {
            alert('Please select an option');
        }
    };

    return (
        <View style={styles.container}>
            <Header headerText="Pregnancy test" />
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/info1bg.png')}
                    style={styles.backgroundImage}
                />
                <Image
                    source={require('../../../assets/images/pregnancy.png')}
                    style={styles.foregroundImage}
                />
            </View>
            <Text style={styles.text}>Is there any good news? Are you pregnant?</Text>
            <View style={styles.optionsContainer}>
                {['Yes', 'No'].map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionButton,
                            selectedOption === option && styles.selectedOptionButton,
                        ]}
                        onPress={() => handleOptionPress(option)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedOption === option && styles.selectedOptionText,
                            ]}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Button
                title="Next"
                backgroundColor={AppColors.lavenderBlue}
                textColor="white"
                onPress={handleNextPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: 20,
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: 100,
        position: 'relative',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
    },
    backgroundImage: {
        position: 'absolute',
        width: 250,
        height: 250,
        resizeMode: 'cover',
    },
    foregroundImage: {
        position: 'absolute',
        width: 280,
        height: 280,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 28,
        color: AppColors.grey,
        textAlign: 'center',
        paddingHorizontal: 40,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    textFooter: {
        fontSize: 18,
        color: AppColors.lightGrey,
        textAlign: 'center',
        paddingHorizontal: 40,
        marginBottom: 40,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: width * 0.9,
        marginBottom: 40,
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
    selectedOptionButton: {
        backgroundColor: AppColors.downy,
        borderColor: AppColors.downy,
    },
    optionText: {
        fontSize: 14,
        color: AppColors.grey,
    },
    selectedOptionText: {
        color: 'white',
    },
});
