import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";

const { width } = Dimensions.get('window');

const MedicationReminder = () => {
    return (
        <View style={styles.container}>
            <Header headerText="Medications" />

            <Text style={styles.infoText}>
                This is a list of medications that your doctor has prescribed for you. Your medications can be updated at any time by clicking the edit button. If you have any questions regarding the medicine or dosage, please consult your doctor, clinic or pharmacist.
            </Text>

            <View style={styles.reminderCard}>
                <TouchableOpacity style={styles.reminderButton}>
                    <Text style={styles.reminderText}>Reminder</Text>
                </TouchableOpacity>
                <Text style={styles.medicineName}>Medicine Name</Text>
                <View style={styles.reminderInfo}>
                    <Text style={styles.reminderDetail}>Date: 2,July, 2024</Text>
                    <Text style={styles.reminderDetail}>Time: 4PM</Text>
                    <Text style={styles.reminderDetail}>10 mg</Text>
                </View>
            </View>

            <View style={styles.currentCycleHeader}>
                <Text style={styles.currentCycleText}>Current Cycle</Text>
            </View>

            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Medicine</Text>
                <Text style={styles.tableHeaderText}>Starting Date</Text>
                <Text style={styles.tableHeaderText}>Days</Text>
            </View>

            <View style={styles.tableRow}>
                <View style={styles.tableRowLeft}>
                    <Text style={styles.tableRowText}>Medicine Name</Text>
                    <Text style={styles.tableRowSubText}>10 mg</Text>
                    <Text style={styles.tableRowSubText}>Prescription</Text>
                    <TouchableOpacity style={styles.moreButton}>
                        <Text style={styles.moreButtonText}>more</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.tableRowText}>05/27</Text>
                <Text style={styles.tableRowText}>5</Text>
            </View>
        </View>
    );
};

export default MedicationReminder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: 20,
    },
    infoText: {
        fontSize: 14,
        color: AppColors.lightGrey,
        marginBottom: 20,
        padding: 30,
    },
    reminderCard: {
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: AppColors.white,
        borderColor: AppColors.downy,
        borderWidth: 2,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    reminderButton: {
        backgroundColor: AppColors.lavenderBlue,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    reminderText: {
        fontSize: 14,
        color: AppColors.white,
    },
    medicineName: {
        fontSize: 24,
        color: AppColors.downy,
        marginBottom: 10,
    },
    reminderInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reminderDetail: {
        fontSize: 18,
        color: AppColors.lightGrey,
    },
    currentCycleHeader: {
        backgroundColor: AppColors.lavenderBlue,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    currentCycleText: {
        fontSize: 16,
        color: AppColors.white,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: AppColors.downy,
        borderRadius: 10,
        height: 50,
    },
    tableHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: AppColors.white,
        textAlign: 'center',
        flex: 1,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f8f8f8',
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    tableRowLeft: {
        flex: 1,
    },
    tableRowText: {
        fontSize: 16,
        color: AppColors.grey,
    },
    tableRowSubText: {
        fontSize: 14,
        color: AppColors.lightGrey,
    },
    moreButton: {
        marginTop: 10,
    },
    moreButtonText: {
        fontSize: 14,
        color: AppColors.white,
        backgroundColor: AppColors.lavenderBlue,
        width: '10%',
        textAlign: 'center',
    },
});

