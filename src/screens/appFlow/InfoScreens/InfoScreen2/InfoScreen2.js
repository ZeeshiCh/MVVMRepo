import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Button from "../../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import AppColors from "../../../../utils/AppColors/AppColors";
import ScreenNames from "../../../../navigation/ScreenNames";
import NavigationService from "../../../../navigation/NavigationService";

export default function Info2() {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.Info3);
    };
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        'Option to choose',
        'Option to choose',
        'Option to choose',
        'Option to choose',
        'Option to choose',
        'Option to choose',
    ];

    return (
        <View style={styles.container}>
            <View style={styles.circleLarge}></View>
            <View style={styles.circleMedium}></View>

            <View style={styles.contentContainer}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.questionTitle}>This is Demi's question</Text>
                    <Text style={styles.questionSubtitle}>Lorem ipsum dolor sit amet, consectetur </Text>

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
                </ScrollView>
            </View>

            <Button
                title="NEXT"
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
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
        flexGrow: 1,
        justifyContent: 'center',
    },
    circleLarge: {
        position: 'absolute',
        top: -200,
        left: 0,
        width: 500,
        height: 500,
        borderRadius: 250,
        backgroundColor: AppColors.downy,
    },
    circleMedium: {
        position: 'absolute',
        top: 120,
        right: -50,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: AppColors.lavenderBlue,
    },
    questionTitle: {
        fontSize: 24,
        color: AppColors.grey,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    questionSubtitle: {
        fontSize: 16,
        color: AppColors.grey,
        marginVertical: 10,
        textAlign: 'center',
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 20,
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
