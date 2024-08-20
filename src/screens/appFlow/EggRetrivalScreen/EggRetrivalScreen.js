import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";

const { width } = Dimensions.get('window');

export default function EggRetrivalScreen() {
    return (
        <ScrollView style={styles.container}>
            <Header headerText="Information" />
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Know the risks</Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>Egg Retrieval</Text>
                    </View>

                    <Text style={styles.sectionText}>The egg retrieval procedure overall has a very low complication rate (most doctors cite these risks as 1%), but there are some risks to be aware of.</Text>

                    <Text style={styles.sectionTitle}>They include:</Text>
                    <Text style={styles.sectionText}>• Infection doctors give antibiotics to prevent this</Text>
                    <Text style={styles.sectionText}>• Bleeding rare risk of excessive bleeding in the abdomen.</Text>
                    <Text style={styles.sectionText}>• Damage to surrounding structures like the bladder or intestines</Text>
                    <Text style={styles.sectionText}>• Remember that the doctor is watching the needle the entire time using ultrasound Ectopic Pregnancy</Text>

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
