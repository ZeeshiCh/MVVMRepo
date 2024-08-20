import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";

const { width } = Dimensions.get('window');

export default function EnergizingScreen() {
    return (
        <ScrollView style={styles.container}>
            <Header headerText="Information" />
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>What Are You Expecting</Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>Energizing</Text>
                    </View>
                    <Text style={styles.sectionText}>• Involves various medications taken at very
                        specific date/time for 2-4 weeks</Text>
                    <Text style={styles.sectionText}>

                        • Requires ongoing monitoring with labs and ultrasounds, sometimes every day</Text>
                    <Text style={styles.sectionText}>
                        • Important to know your calendar, and to NOT miss medication doses or appointments</Text>

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
    },
    contentContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    header: {
        backgroundColor: AppColors.white,
        width: width * 0.9,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppColors.downy,
    },
    section: {
        backgroundColor: AppColors.white,
        width: width * 0.9,
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 2,
    },
    sectionHeader: {
        backgroundColor: AppColors.lavenderBlue,
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppColors.white,
    },
    sectionText: {
        fontSize: 14,
        color: AppColors.grey,
        marginTop: 5,
        lineHeight: 30,
    },
});
