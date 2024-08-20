import React from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Dimensions } from 'react-native';
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";
import AppColors from "../../../utils/AppColors/AppColors";
import { useNavigation } from '@react-navigation/native';
import WhiteButton from "../../../components/WhiteButton/WhiteButton";
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function MedicationDose() {
    const navigation = useNavigation();
    const [reminderEnabled, setReminderEnabled] = React.useState(false);

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.Medications);
    };

    return (
        <View style={styles.container}>
            <Header headerText="Medications Dose" />
            <View style={styles.contentContainer}>
                <WhiteButton
                    title="Selected Medicine Name Here"
                    // onPress={() => {/* Handle press logic here if needed */}}
                />
                <View style={styles.inputRow}>
                    <TextInput style={styles.input} placeholder="Unit Amount" />
                    <TextInput style={styles.input} placeholder="Unit Type" />
                </View>
                <View style={styles.inputRow}>
                    <TextInput style={styles.input} placeholder="Start Date" />
                    <TextInput style={styles.input} placeholder="End Date" />
                </View>
                <TextInput style={styles.input1} placeholder="Medicine Time Per Day?" />
                <View style={styles.reminderRow}>
                    <Text style={styles.reminderText}>Set Reminder</Text>
                    <Switch
                        value={reminderEnabled}
                        onValueChange={setReminderEnabled}
                    />
                </View>
                {reminderEnabled && (
                    <View style={styles.inputRow}>
                        <TextInput style={styles.input} placeholder="Time --:--" />
                        <TextInput style={styles.input} placeholder="Time Per Day (e.g., morning)" />
                    </View>
                )}
            </View>
            <Button
                title="Save"
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
    contentContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        marginBottom: 15,
    },
    input: {
        backgroundColor: AppColors.white,
        borderRadius: 10,
        height: 50,
        width: width * 0.42,
        paddingHorizontal: 15,
        fontSize: 16,
        borderColor: AppColors.grey,
        borderWidth: 0.3,
    },
    input1: {
        backgroundColor: AppColors.white,
        borderRadius: 10,
        height: 50,
        width: '100%',
        paddingHorizontal: 100,
        fontSize: 16,
        borderColor: AppColors.grey,
        borderWidth: 0.3,
        marginBottom: 10,
        textAlign: 'left',
    },
    reminderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.9,
        marginBottom: 15,
        borderColor: AppColors.grey,
        borderWidth: 0.3,
        borderRadius: 10,
    },
    reminderText: {
        fontSize: 16,
        color: AppColors.grey,
        marginLeft: 10,
    },
});
