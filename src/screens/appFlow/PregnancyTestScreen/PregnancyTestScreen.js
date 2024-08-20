import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import WhiteButton from "../../../components/WhiteButton/WhiteButton";
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function PregnancyTestScreen() {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.Calender);
    };
    return (
        <View style={styles.container}>
            <Header headerText="pregnancy test" />
            <View style={{marginTop:30}}>
                <WhiteButton title="Enter your pregnancy test" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
                <TouchableOpacity style={styles.dateIcon}>
                    <Text>📅</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.optionsContainer}>
                {['Positive', 'Negative'].map((option, index) => (
                    <TouchableOpacity key={index} style={styles.optionButton}>
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
                {/* <TouchableOpacity style={[styles.optionButton, styles.activeButton]}>
                    <Text style={[styles.optionText, styles.activeButtonText]}>Start Period</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>End Period</Text>
                </TouchableOpacity> */}
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
        marginBottom: 100,
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
    saveButton: {
        backgroundColor: AppColors.downy,
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 100,
        alignItems: 'center',
        marginBottom: 20,
    },
    saveButtonText: {
        fontSize: 16,
        color: AppColors.white,
        fontWeight: 'bold',
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
