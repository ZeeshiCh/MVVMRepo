import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";
import WhiteButton from "../../../components/WhiteButton/WhiteButton";
import { useNavigation } from '@react-navigation/native';
import Button from "../../../components/Button/Button";
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function AddNoteScreen() {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.Calender);
    };

    return (
        <View style={styles.container}>
            <Header headerText="Notes" />
            <View style={styles.noteContainer}>
                <View>
                    <WhiteButton title="Title" />
                </View>
                <TextInput
                    style={styles.noteInput}
                    placeholder="Write your note here"
                    multiline
                    textAlignVertical="top"
                />
            </View>
            <Button
                title='Save'
                textColor={AppColors.white}
                backgroundColor={AppColors.downy}
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
        paddingTop: 20,
    },
    noteContainer: {
        width: width * 0.9,
        backgroundColor: AppColors.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AppColors.downy,
        marginBottom: 40,
        marginTop: 30,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppColors.downy,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.downy,
    },
    noteInput: {
        height: 200,
        padding: 15,
        fontSize: 16,
        color: AppColors.grey,
    },
    saveButton: {
        backgroundColor: AppColors.downy,
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: width * 0.35,
        alignItems: 'center',
    },
    saveButtonText: {
        fontSize: 18,
        color: AppColors.white,
        fontWeight: 'bold',
    },
});
