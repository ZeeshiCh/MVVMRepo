import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";

const { width } = Dimensions.get('window');

export default function HormonalPanel() {
    return (
        <ScrollView style={styles.container}>
            <Header headerText="Your hormonal panel" />

            <View style={styles.contentContainer}>
                <Text style={styles.description}>
                    These are the tests required for the second or third day of your cycle by the RE or OB.
                    Enter the date and number of tests and the type of measurement unit. Enter what you have,
                    then come back to update your results over time.
                </Text>
                <View style={styles.inputRow}>
                    <TextInput
                        style={[styles.input, styles.dateInput]}
                        placeholder="dd/mm/yyyy"
                    />
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="calendar-outline" size={24} color={AppColors.downy} />
                    </TouchableOpacity>
                </View>
                {[
                    'Estrogen',
                    'Progesterone',
                    'FSH',
                    'LH',
                    'AMH',
                    'TSH',
                    'Testosterone',
                    'Prolactin'
                ].map((testName, index) => (
                    <View key={index} style={styles.inputRow}>
                        <TextInput
                            style={[styles.input, styles.testInput]}
                            placeholder={testName}
                        />
                        <TouchableOpacity style={[styles.input, styles.unitInput]}>
                            <Text style={styles.unitText}>Unit</Text>
                            <Ionicons name="chevron-down-outline" size={20} color={AppColors.downy} />
                        </TouchableOpacity>
                    </View>
                ))}
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.button, styles.nextButton]}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.skipButton]}>
                        <Text style={styles.buttonText}>Skip</Text>
                    </TouchableOpacity>
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
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    description: {
        fontSize: 18,
        color: AppColors.lightGrey,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: '700',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: AppColors.lightGrey,
        borderRadius: 5,
        padding: 10,
        backgroundColor: AppColors.white,
    },
    dateInput: {
        marginRight: 10,
    },
    testInput: {
        marginRight: 10,
    },
    unitInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    unitText: {
        color: AppColors.grey,
    },
    iconButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: AppColors.lightGrey,
        borderRadius: 5,
        backgroundColor: AppColors.white,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    button: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: AppColors.downy,
        marginRight: 10,
    },
    skipButton: {
        backgroundColor: AppColors.lavenderBlue,
    },
    buttonText: {
        color: AppColors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
