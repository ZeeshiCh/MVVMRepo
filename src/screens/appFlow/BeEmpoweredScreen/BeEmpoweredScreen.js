import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";

const { width } = Dimensions.get('window');

export default function BeEmpoweredScreen() {
    return (
        <ScrollView style={styles.container}>
            <Header headerText="Information" />
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Know the risks</Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>Be empowered</Text>
                    </View>
                    <Text style={styles.sectionTitle}>Common medications and herbs to avoid:</Text>
                    <Text style={styles.sectionText}>• Pain relievers: Motrin, Advil, Aleve, full-strength aspirin</Text>
                    <Text style={styles.sectionText}>• Herbs: Black Cohosh, Feverfew, Garlic, Ginseng, St. John's Wort, Goldenseal</Text>
                    <Text style={styles.sectionText}>• In general, review all prescription/over-the-counter medications, and herbs with your provider</Text>

                    <Text style={styles.sectionTitle}>Lifestyle modifications:</Text>
                    <Text style={styles.sectionText}>• Stop tobacco products at least 3 months prior and avoid secondhand smoke exposure</Text>
                    <Text style={styles.sectionText}>• Maintain a healthy weight through physical activity and balanced nutrition (think rainbow diet)</Text>

                    <Text style={styles.sectionTitle}>Examples of toxins that dysregulate normal reproductive function:</Text>
                    <Text style={styles.sectionText}>• Bisphenol A (BPA) - found in many plastic products
                        Dioxins - a byproduct in herbicide production, paper bleaching, waste burning, and wildfires</Text>
                    <Text style={styles.sectionText}>• Perfluoroalkyl and Polyfluoroalkyl Substances (PFAS) - found in firefighting foams and non-stick pan, paper, and textile coatings Phthalates-found in some food packaging, cosmetics, children's toys, and medical devices</Text>
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
