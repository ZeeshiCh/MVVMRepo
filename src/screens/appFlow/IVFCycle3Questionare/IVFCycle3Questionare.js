import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Button from "../../../components/Button/Button";
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

const questions = [
    "Does your partner have a problem with their sperm?",
    "Have you been diagnosed as having a low ovarian reserve?",
    "Do you have polycystic ovaries or polycystic ovary syndrome?",
    "Do you have any of the following uterine problems: septum, myoma, intrauterine adhesions, congenital anomalies?"
];

const IVFCycle3Questionare = () => {
    const navigation = useNavigation();
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleAnswer = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header headerText="IVF Success Calculator" />

            {questions.map((question, index) => (
                <View key={index} style={styles.questionContainer}>
                    <Text style={styles.questionText}>{question}</Text>
                    <View style={styles.answerContainer}>
                        <TouchableOpacity
                            style={[styles.answerButton, answers[index] === 'yes' && styles.selectedButton]}
                            onPress={() => handleAnswer(index, 'yes')}
                        >
                            <Text style={[styles.answerText, answers[index] === 'yes' && styles.selectedText]}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.answerButton, answers[index] === 'no' && styles.selectedButton]}
                            onPress={() => handleAnswer(index, 'no')}
                        >
                            <Text style={[styles.answerText, answers[index] === 'no' && styles.selectedText]}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
            <Button
                title="Calculate"
                backgroundColor={AppColors.lavenderBlue}
                textColor="white"
                onPress={() => NavigationService.navigate(ScreenNames.CalculateResult)}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 20,
        backgroundColor: AppColors.white,
        alignItems: 'center',
    },
    questionContainer: {
        width: '90%',
        marginBottom: 20,
        marginTop:10,
    },
    questionText: {
        color: AppColors.grey,
        fontSize: 18,
        marginBottom: 10,
    },
    answerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    answerButton: {
        flex: 0.48,
        padding: 5,
        borderRadius: 30,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: AppColors.grey,
    },
    selectedButton: {
        backgroundColor: AppColors.downy,
        borderColor: AppColors.downy,
    },
    answerText: {
        color: AppColors.grey,
        fontSize: 16,
    },
    selectedText: {
        color: 'white',
    },
});

export default IVFCycle3Questionare;
