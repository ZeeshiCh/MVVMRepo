import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavigationService from "../../../navigation/NavigationService";
import AppColors from "../../../utils/AppColors/AppColors";
import ScreenNames from "../../../navigation/ScreenNames";

const LanguageSelectionScreen = ({ navigation }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        if (language === 'English') {
            NavigationService.navigate(ScreenNames.Welcome);
        }
        // else if (language === 'Arabic') {
        //   navigation.navigate('ArabicScreen'); // Replace with your Arabic screen
        // }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>LOGO</Text>
                </View>
            </View>
            <Text style={styles.promptText}>Select the Language</Text>
            <TouchableOpacity
                style={styles.languageItem}
                onPress={() => handleLanguageChange('Arabic')}
            >
                <Image source={require('../../../assets/images/arabia.png')} style={styles.flagIcon} />
                <Text style={styles.languageText}>Arabic</Text>
                <Ionicons
                    name={selectedLanguage === 'Arabic' ? 'radio-button-on' : 'radio-button-off'}
                    size={24}
                    color={AppColors.downy}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.languageItem}
                onPress={() => handleLanguageChange('English')}
            >
                <Image source={require('../../../assets/images/english.png')} style={styles.flagIcon} />
                <Text style={styles.languageText}>English</Text>
                <Ionicons
                    name={selectedLanguage === 'English' ? 'radio-button-on' : 'radio-button-off'}
                    size={24}
                    color={AppColors.downy}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.downy,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 100,
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: AppColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    logoText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: AppColors.cherryBlossom,
    },
    promptText: {
        fontSize: 22,
        fontWeight:'bold',
        color: AppColors.white,
        marginBottom: 30,
        marginTop:150,
    },
    languageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: AppColors.white,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    flagIcon: {
        width: 32,
        height: 32,
        marginRight: 10,
    },
    languageText: {
        flex: 1,
        fontSize: 18,
        color: AppColors.grey,
    },
});

export default LanguageSelectionScreen;
