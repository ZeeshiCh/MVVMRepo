import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";

const { width } = Dimensions.get('window');

export default function Medications() {
    return (
        <View style={styles.container}>
            <Header headerText="Medications" />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.infoText}>
                    This is a list of medications that your doctor has prescribed for you. Your medications can be updated at any time by clicking the edit button. If you have any questions regarding the medicine or dosage, please consult your doctor, clinic or pharmacist.
                </Text>
                <CycleList cycleNumber="1" />
                <CycleList cycleNumber="2" />
                <CycleList cycleNumber="3" />
            </ScrollView>
        </View>
    );
}

function CycleList({ cycleNumber }) {
    return (
        <View style={styles.cycleContainer}>
            <TouchableOpacity style={styles.cycleButton}>
                <Text style={styles.cycleButtonText}>Cycle {cycleNumber}</Text>
            </TouchableOpacity>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Medicine</Text>
                <Text style={styles.tableHeaderText}>Starting Date</Text>
                <Text style={styles.tableHeaderText}>Days</Text>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.medicineInfo}>
                    <Text style={styles.medicineName}>Medicine Name</Text>
                    <Text style={styles.medicineDetails}>10 mg</Text>
                    <Text style={styles.medicineDetails}>Prescription</Text>
                    <TouchableOpacity style={styles.moreButton}>
                        <Text style={styles.moreButtonText}>more</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.tableCell}>05/27</Text>
                <Text style={styles.tableCell}>5</Text>
            </View>
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
    infoText: {
        width: width * 0.9,
        fontSize: 14,
        color: AppColors.grey,
        textAlign: 'left',
        marginBottom: 20,
    },
    cycleContainer: {
        width: width * 0.9,
        marginBottom: 20,
    },
    cycleButton: {
        backgroundColor: AppColors.lavenderBlue,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    cycleButtonText: {
        fontSize: 16,
        fontWeight:'600',
        color: AppColors.white,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#87cfdb',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    tableHeaderText: {
        fontSize: 16,
        color: '#fff',
        width: width * 0.25,
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f0f8ff',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    tableCell: {
        fontSize: 16,
        color: AppColors.grey,
        width: width * 0.25,
        textAlign: 'center',
        alignSelf: 'center',
    },
    medicineInfo: {
        width: width * 0.25,
    },
    medicineName: {
        fontSize: 16,
        color: AppColors.grey,
    },
    medicineDetails: {
        fontSize: 14,
        color: AppColors.lightGrey,
    },
    moreButton: {
        marginTop: 5,
        backgroundColor: AppColors.lavenderBlue,
        width:'25%'
    },
    moreButtonText: {
        fontSize: 12,
        textAlign:'center',
        color: AppColors.white,
    },
});
