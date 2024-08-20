import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const IVFCalculator = () => {
    const navigation = useNavigation();
    const [selectedCycle, setSelectedCycle] = useState('');

    const handleCyclePress = (cycle) => {
        setSelectedCycle(cycle);
        if (cycle === 'Cycle 1') {
            NavigationService.navigate(ScreenNames.IVFCycle1);
        }
        if (cycle === 'Cycle 2') {
            NavigationService.navigate(ScreenNames.IVFCycle2);
        }
        if (cycle === 'Cycle 3') {
            NavigationService.navigate(ScreenNames.IVFCycle3);
        }
    };

    return (
        <View style={styles.container}>
            <Header headerText="IVF Success Calculator" />
            <Text style={styles.title}>IVF Success Calculator</Text>
            <Text style={styles.subtitle}>Please select your IVF cycle</Text>

            <TouchableOpacity
                style={[
                    styles.cycleButton,
                    selectedCycle === 'Cycle 1' && styles.selectedCycle,
                ]}
                onPress={() => handleCyclePress('Cycle 1')}
            >
                <Text
                    style={[
                        styles.cycleButtonText,
                        selectedCycle === 'Cycle 1' && styles.selectedCycleText,
                    ]}
                >
                    Cycle 1
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.cycleButton,
                    selectedCycle === 'Cycle 2' && styles.selectedCycle,
                ]}
                onPress={() => handleCyclePress('Cycle 2')}
            >
                <Text
                    style={[
                        styles.cycleButtonText,
                        selectedCycle === 'Cycle 2' && styles.selectedCycleText,
                    ]}
                >
                    Cycle 2
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.cycleButton,
                    selectedCycle === 'Cycle 3' && styles.selectedCycle,
                ]}
                onPress={() => handleCyclePress('Cycle 3')}
            >
                <Text
                    style={[
                        styles.cycleButtonText,
                        selectedCycle === 'Cycle 3' && styles.selectedCycleText,
                    ]}
                >
                    Cycle 3
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: AppColors.white,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: AppColors.white,
        backgroundColor: AppColors.lavenderBlue,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 40,
        width: '90%',
    },
    subtitle: {
        fontSize: 20,
        color: AppColors.grey,
        marginBottom: 20,
    },
    cycleButton: {
        width: '90%',
        padding: 15,
        borderRadius: 25,
        borderColor: AppColors.grey,
        borderWidth: 1,
        marginVertical: 10,
        alignItems: 'center',
    },
    cycleButtonText: {
        fontSize: 20,
        color: AppColors.grey,
    },
    selectedCycle: {
        backgroundColor: AppColors.downy,
        borderColor: AppColors.downy,
    },
    selectedCycleText: {
        color: AppColors.white,
    },
});

export default IVFCalculator;
