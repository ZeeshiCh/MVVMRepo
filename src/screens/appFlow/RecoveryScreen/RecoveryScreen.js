import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";

const { width } = Dimensions.get('window');

export default function RecoveryScreen() {
    return (
        <ScrollView style={styles.container}>
            <Header headerText="Information" />
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>What Are You Expecting</Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>Recovery</Text>
                    </View>
                    <Text style={styles.sectionText}>• Egg retrieval is conducted under monitored
                        anesthesia care</Text>
                    <Text style={styles.sectionText}>

                        • Guided by ultrasound, a needle passes through the top of the vagina to the follicles and aspirates the fluid to detach the eggs</Text>
                    <Text style={styles.sectionText}>
                        • The procedure usually takes about 10-30
                        minutes</Text>
                    <Text style={styles.sectionText}>
                        • Egg retrieval is conducted under monitored
                        anesthesia care

                        • Guided by ultrasound, a needle passes through the top of the vagina to the follicles and aspirates the fluid to detach the eggs

                        • The procedure usually takes about 10-30
                        minutes

                        • Things to consider and discuss with your provider: freezing eggs, fertilizing eggs with sperm, embryo grading, genetic testing, and timing of transfer
                    </Text>

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
