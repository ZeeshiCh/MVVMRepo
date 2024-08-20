import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function ListOfMedicines() {
    const navigation = useNavigation();

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        'Menopur',
        'Gonal-F',
        'Follistim',
        'Dilute Lupron',
        'Micro-dose hCG',
        'Cetrotide',
        'Ganarelix',
        'Lupron trigger shot',
        'Clomid',
        'Letrozole',
        'Birth control pills',
        'Estrogen Patch',
        'Other',
    ];

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.MedicationDose);
    };

    return (
        <View style={styles.container}>
            <Header headerText="List of Medications" />
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/info1bg.png')}
                    style={styles.backgroundImage}
                />
                <Image
                    source={require('../../../assets/images/pharma.png')}
                    style={styles.foregroundImage}
                />
            </View>
            <Text style={styles.desc}>Check the medications prescribed for your cycle and make sure you pick them up from the pharmacy.</Text>
            <View style={styles.optionsContainer}>
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionButton,
                            selectedOption === index && styles.selectedOption,
                        ]}
                        onPress={() => setSelectedOption(index)}
                    >
                        <Text style={[
                            styles.optionText,
                            selectedOption === index && styles.selectedOptionText
                        ]}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Button
                title="Next"
                backgroundColor={AppColors.downy}
                textColor="white"
                onPress={handlePress}
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
    desc: {
        fontSize: 20,
        color: AppColors.grey,
        textAlign: 'center',
        paddingHorizontal: 40,
        fontWeight: '400',
    },
    imageContainer: {
        marginTop: 50,
        position: 'relative',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    backgroundImage: {
        position: 'absolute',
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    foregroundImage: {
        position: 'absolute',
        width: 180,
        height: 180,
        resizeMode: 'contain',
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 50,
    },
    optionButton: {
        backgroundColor: AppColors.white,
        borderColor: AppColors.grey,
        borderWidth: 0.5,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 30,
        margin: 5,
    },
    selectedOption: {
        backgroundColor: AppColors.downy,
    },
    optionText: {
        fontSize: 16,
        color: AppColors.grey,
    },
    selectedOptionText: {
        color: AppColors.white,
    },
});
