import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";

const { width } = Dimensions.get('window');

export default function EmbyroTransferScreen() {
    return (
        <ScrollView style={styles.container}>
            <Header headerText="Information" />
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Know the risks</Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>Embryo Transfer</Text>
                    </View>
                    <Text style={styles.sectionTitle}>Ectopic Pregnancy</Text>
                    <Text style={styles.sectionText}>• There is a small risk (1%) of an ectopic pregnancy with IVF. This is when the embryo. implants in the wrong place (not at the top of the uterus). This could be in the tube, in the corner of the uterus by the tube (cornual), or at a C-section scar.</Text>
                    <Text style={styles.sectionText}>• Symptoms: sharp/stabbing pain, vaginal spotting or bleeding, dizziness or fainting, lower back pain, or low blood pressure (from blood loss). Contact your provider immediately.</Text>
                    <Text style={styles.sectionText}>
                        • Treatment options for ectopic pregnancy: medicines can be given, or surgery may be
                        required to end the pregnancy.</Text>

                    <Text style={styles.sectionTitle}>Subchorionic Hematoma</Text>
                    <Text style={styles.sectionText}>• This is a collection of blood, similar to a bruise, between the pregnancy and the uterus.</Text>
                    <Text style={styles.sectionText}>• Small subchorionic hematoma do not increase the risk of miscarriage, but large hematomas are associated with a small increased risk of pregnancy loss.</Text>
                    <Text style={styles.sectionText}>• There is an increased risk of subchorionic hematoma in pregnancies following IVF compared to non-IVF pregnancies, but the risk of loss in IVF pregnancies is comparable to non-IVF pregnancies.</Text>

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
