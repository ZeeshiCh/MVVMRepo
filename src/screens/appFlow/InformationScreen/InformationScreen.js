import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import WhiteButton from "../../../components/WhiteButton/WhiteButton";

export default function InformationScreen() {
    return (
        <View style={styles.container}>
            <Header headerText="Information" />
            <View style={styles.contentContainer}>
                <WhiteButton title="Summary of observations during the IVF treatment cycle:" />

                <Text style={styles.observationText}>
                    1. Regular medical follow-up: adherence to appointments and conducting examinations on time.
                </Text>
                <Text style={styles.observationText}>
                    2. Psychological and emotional preparation: maintaining a positive psychological state and staying away from stress.
                </Text>
                <Text style={styles.observationText}>
                    3. Diet: Follow a healthy, balanced diet and take vitamins.
                </Text>
                <Text style={styles.observationText}>
                    4. Physical activity: Exercise moderately and avoid strenuous activities.
                </Text>
                <Text style={styles.observationText}>
                    5. Medications and treatment: Take medications regularly and inform the doctor of any side effects.
                </Text>
                <Text style={styles.observationText}>
                    6. Communicating with the medical team: asking questions and inquiries, and obtaining directions.
                </Text>
                <Text style={styles.observationText}>
                    7. Rest and sleep: Get enough rest and good sleep.
                </Text>
                <Text style={styles.observationText}>
                    8. Family and social support: Seek support from family and friends.
                </Text>
                <Text style={styles.observationText}>
                    9. Medical procedures: Preparing for artificial insemination procedures and adhering to post-procedure instructions.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    contentContainer: {
        backgroundColor: AppColors.white,
        marginHorizontal: 20,
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        marginTop: 20,
    },
    observationText: {
        paddingHorizontal:20,
        fontSize: 18,
        color: AppColors.grey,
        marginBottom: 20,
        lineHeight: 26,
    },
});
