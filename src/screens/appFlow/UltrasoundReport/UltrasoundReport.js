import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";

const { width } = Dimensions.get('window');

export default function UltrasoundReport() {
    return (
        <View style={styles.container}>
            <Header headerText="Ultrasound" />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <ReportCard cycleNumber="1" date="17th July 2024" imageSrc={require('../../../assets/images/medicalreport.jpg')} />
                <ReportCard cycleNumber="2" date="20th July 2024" imageSrc={require('../../../assets/images/medicalreport.jpg')} />
            </ScrollView>
        </View>
    );
}

function ReportCard({ cycleNumber, date, imageSrc }) {
    return (
        <View style={styles.reportContainer}>
            <View style={styles.headerRow}>
                <TouchableOpacity style={styles.cycleButton}>
                    <Text style={styles.cycleButtonText}>Cycle {cycleNumber}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dateButton}>
                    <Text style={styles.dateButtonText}>{date}</Text>
                </TouchableOpacity>
            </View>
            <Image source={imageSrc} style={styles.reportImage} resizeMode="contain" />
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
    reportContainer: {
        width: width * 0.9,
        marginBottom: 30,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    cycleButton: {
        backgroundColor: AppColors.lavenderBlue,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 50,
    },
    cycleButtonText: {
        fontSize: 16,
        color: AppColors.white,
    },
    dateButton: {
        backgroundColor: AppColors.lavenderBlue,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateButtonText: {
        fontSize: 16,
        color: '#fff',
        marginRight: 10,
    },
    reportImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: AppColors.downy,
        borderRadius: 10,
    },
});
