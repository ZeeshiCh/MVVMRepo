import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import WhiteButton from "../../../components/WhiteButton/WhiteButton";
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import navigationService from "../../../navigation/NavigationService";

// Import emojis
import happyEmoji from '../../../assets/images/moodemoji/emoji1.png';
import calmEmoji from '../../../assets/images/moodemoji/emoji2.png';
import sadEmoji from '../../../assets/images/moodemoji/emoji3.png';
import emotionalEmoji from '../../../assets/images/moodemoji/emoji4.png';
import anxiousEmoji from '../../../assets/images/moodemoji/emoji5.png';
import angryEmoji from '../../../assets/images/moodemoji/emoji6.png';
import stressedEmoji from '../../../assets/images/moodemoji/emoji7.png';
import depressedEmoji from '../../../assets/images/moodemoji/emoji8.png';

const { width } = Dimensions.get('window');

const getEmoji = (title) => {
    switch (title) {
        case 'Happy': return happyEmoji;
        case 'Calm': return calmEmoji;
        case 'Sad': return sadEmoji;
        case 'Emotional': return emotionalEmoji;
        case 'Anxious': return anxiousEmoji;
        case 'Angry': return angryEmoji;
        case 'Stressed': return stressedEmoji;
        case 'Depressed': return depressedEmoji;
        default: return null;
    }
};

export default function MoodScreen() {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigation = useNavigation();

    const handlePress = () => {
        navigationService.navigate(ScreenNames.SymptomsScreen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <View style={styles.container}>
            <Header headerText="Mood" />
            <View style={{ marginTop: 30 }}>
                <WhiteButton title="How are you in your mood?" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
                <TouchableOpacity style={styles.dateIcon}>
                    <Text>📅</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.optionsContainer}>
                {['Happy', 'Calm', 'Sad', 'Emotional', 'Anxious', 'Angry', 'Stressed', 'Depressed'].map((option, index) => (
                    <View key={index} style={styles.optionButtonContainer}>
                        <TouchableOpacity
                            style={[
                                styles.optionButton,
                                selectedOption === option && styles.selectedOptionButton
                            ]}
                            onPress={() => handleOptionSelect(option)}
                        >
                            <Image source={getEmoji(option)} style={styles.emoji} />
                            <Text style={[
                                styles.optionText,
                                selectedOption === option && styles.selectedOptionText
                            ]}>{option}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <Button
                title='Save'
                textColor={AppColors.white}
                backgroundColor={AppColors.downy}
                onPress={handlePress}
            />
            <TouchableOpacity style={styles.helpContainer}>
                <Text style={styles.helpText}>
                    <Text style={styles.helpIcon}>❓</Text> Can't Find The Relevant Answer? Click Here!
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: AppColors.white,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: AppColors.grey,
        borderWidth: 1,
        borderRadius: 30,
        width: width * 0.9,
        padding: 10,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    dateIcon: {
        marginLeft: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: width * 0.9,
        marginBottom: 40,
    },
    optionButtonContainer: {
        alignItems: 'center',
        margin: 5,
    },
    optionButton: {
        backgroundColor: AppColors.white,
        borderColor: AppColors.grey,
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: (width * 0.9 - 40) / 2,
        height: 40,
        alignItems: 'center',
        position: 'relative',
        marginBottom: 25,
    },
    selectedOptionButton: {
        backgroundColor: AppColors.downy,
        borderColor: AppColors.downy,
    },
    emoji: {
        position: 'absolute',
        top: -10,
        left: -10,
        width: 60,
        height: 60,
    },
    optionText: {
        fontSize: 14,
        color: AppColors.grey,
    },
    selectedOptionText: {
        color: AppColors.white,
    },
    helpContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        alignItems: 'flex-start',
    },
    helpText: {
        fontSize: 14,
        color: AppColors.grey,
        textAlign: 'center',
    },
    helpIcon: {
        color: AppColors.downy,
    },
});
