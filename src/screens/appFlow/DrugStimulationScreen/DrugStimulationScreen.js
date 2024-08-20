import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";

const { width } = Dimensions.get('window');

export default function DrugStimulationScreen() {
    return (
        <ScrollView style={styles.container}>
            <Header headerText="Information" />
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Know the risks</Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>Drug Stimulation</Text>
                    </View>
                    <Text style={styles.sectionTitle}>Ovarian Torsion</Text>
                    <Text style={styles.sectionText}>• Enlarged ovaries during stimulation can increase the risk of one or both ovaries to flip, cutting off the blood supply to the ovary.</Text>
                    <Text style={styles.sectionText}>• Symptoms: sudden sharp pain, nausea, and vomiting. This is a surgical emergency. Contact your provider immediately.</Text>
                    <Text style={styles.sectionText}>• Prevention: avoid jumping or high intensity interval training during this time.</Text>

                    <Text style={styles.sectionTitle}>Ovarian Hyperstimulation Syndrome (OHSS)</Text>
                    <Text style={styles.sectionText}>• The risk of OHSS increase in those who have a robust response to stimulation medication with lots of eggs retrieved.</Text>
                    <Text style={styles.sectionText}>• OHSS is a condition where hormones from the ovaries cause your blood vessels to leak fluid into the abdomen and lungs. This can cause electrolyte abnormalities. and in the more severe cases, increase risk for blood clots.</Text>
                    <Text style={styles.sectionText}>• Symptoms: significant bloating, weight gain of 3-5+ pounds, nausea and vomiting, difficulty breathing, concentrated and/or low volume urine, or diarrhea. Contact your provider.</Text>

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
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: AppColors.lavenderBlue,
        marginTop: 10,
    },
    sectionText: {
        fontSize: 14,
        color: AppColors.grey,
        marginTop: 5,
        lineHeight: 30,
    },
});
