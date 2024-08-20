import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";

const { width } = Dimensions.get('window');

export default function TestsScreen() {
    return (
        <ScrollView style={styles.container}>
            <Header headerText="Information" />
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>What Are You Expecting</Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>Tests</Text>
                    </View>
                    <Text style={styles.sectionTitle}>Ovarian reserve tests</Text>
                    <Text style={styles.sectionText}>▪ Baseline ultrasound to determine antral follicle count (AFC)</Text>
                    <Text style={styles.sectionText}>▪ Baseline blood work to measure anti-mullerian hormone (AMH)</Text>
                    <Text style={styles.sectionText}>▪ Cycle day 2-3 estradiol and follicular stimulating hormone (FSH) levels</Text>

                    <Text style={styles.sectionTitle}>Uterus and tube evaluation</Text>
                    <Text style={styles.sectionText}>▪ Hysterosalpingogram (HSG), OR</Text>
                    <Text style={styles.sectionText}>▪ Hysterosalpingo Contrast Sonography (HyCosy/ Femvue)</Text>

                    <Text style={styles.sectionTitle}>Other labs</Text>
                    <Text style={styles.sectionText}>▪ Infectious disease labs (e.g., HIV, hepatitis, syphilis, HTLV)</Text>
                    <Text style={styles.sectionText}>▪ Preconception labs if planning a transfer (e.g., blood type, complete blood count, Vitamin D, thyroid stimulating hormone (TSH))</Text>
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
