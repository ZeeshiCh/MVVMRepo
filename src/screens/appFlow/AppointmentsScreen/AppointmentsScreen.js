import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";
import WhiteButton from "../../../components/WhiteButton/WhiteButton";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function AppointmentsScreen() {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.Calender);
    };
    return (
        <View style={styles.container}>
            <Header headerText="Appointment" />
            <View style={{ marginTop: 30 }}>
                <WhiteButton title="Add Appointment date" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Appointment Type" />
                <TouchableOpacity style={styles.dropdownIcon}>
                    <Text>▼</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="appointment date dd/mm/yy" />
                <TouchableOpacity style={styles.dateIcon}>
                    <Text>📅</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.timeContainer}>
                <View style={styles.timeInputContainer}>
                    <TextInput style={styles.timeInput} placeholder="--:-- --" />
                    <TouchableOpacity style={styles.timeIcon}>
                        <Text>⏰</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.toText}>TO</Text>
                <View style={styles.timeInputContainer}>
                    <TextInput style={styles.timeInput} placeholder="--:-- --" />
                    <TouchableOpacity style={styles.timeIcon}>
                        <Text>⏰</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Place Of Appointment" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={[styles.input, styles.notesInput]} placeholder="Add notes here" multiline />
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
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppColors.downy,
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: AppColors.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        width: width * 0.9,
        padding: 10,
        marginBottom: 15,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    dropdownIcon: {
        marginLeft: 10,
    },
    dateIcon: {
        marginLeft: 10,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        width: width * 0.9,
    },
    timeInputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: AppColors.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    timeInput: {
        flex: 1,
        fontSize: 16,
    },
    timeIcon: {
        marginLeft: 10,
    },
    toText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: AppColors.grey,
    },
    notesInput: {
        height: 100,
        textAlignVertical: 'top',
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
