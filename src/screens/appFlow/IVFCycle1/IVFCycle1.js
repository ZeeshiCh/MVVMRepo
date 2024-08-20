import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

const IVFCycle1 = () => {
    const navigation = useNavigation();
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [amhLevel, setAmhLevel] = useState('');
    const [knowAmhLevel, setKnowAmhLevel] = useState(null);

    return (
        <View style={styles.container}>
            <Header headerText="IVF Success Calculator" />

            <View style={styles.header}>
                <Text style={styles.headerText}>IVF Cycle 1</Text>
            </View>

            <Text style={styles.description}>
                Calculates your chances of having a baby over one or more complete* cycles of IVF treatment. Questions are worded for completion by the female partner.
            </Text>

            <Text style={styles.label}>What age are you?</Text>
            <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
                placeholder="xxxx"
            />

            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.label}>What is your Height?</Text>
                    <TextInput
                        style={styles.input}
                        value={height}
                        onChangeText={setHeight}
                        keyboardType="numeric"
                        placeholder="xxxx ft"
                    />
                </View>
                <View style={styles.column}>
                    <Text style={styles.label}>What is your Weight?</Text>
                    <TextInput
                        style={styles.input}
                        value={weight}
                        onChangeText={setWeight}
                        keyboardType="numeric"
                        placeholder="xxx kg"
                    />
                </View>
            </View>

            <Text style={styles.label}>Do you know your most recent AMH level?</Text>
            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.button, knowAmhLevel === 'yes' && styles.buttonSelected]}
                    onPress={() => setKnowAmhLevel('yes')}
                >
                    <Text style={[styles.buttonText, knowAmhLevel === 'yes' && styles.buttonTextSelected]}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, knowAmhLevel === 'no' && styles.buttonSelected]}
                    onPress={() => setKnowAmhLevel('no')}
                >
                    <Text style={[styles.buttonText, knowAmhLevel === 'no' && styles.buttonTextSelected]}>No</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
                placeholder="xxxx"
            />
            {/*
      {knowAmhLevel === 'yes' && (
        <TextInput
          style={styles.input}
          value={amhLevel}
          onChangeText={setAmhLevel}
          keyboardType="numeric"
          placeholder="xxxx"
        />
      )} */}

            <Button
                title="Next"
                backgroundColor={AppColors.lavenderBlue}
                textColor="white"
                onPress={() => NavigationService.navigate(ScreenNames.IVFCycle1Questionare)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 20,
        backgroundColor: AppColors.white,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: AppColors.white,
        backgroundColor: AppColors.lavenderBlue,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 40,
        marginHorizontal:20,
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        textAlign:'center',
        fontWeight: 'bold',
    },
    description: {
        color: AppColors.downy,
        fontSize: 16,
        textAlign: 'left',
        marginHorizontal:20,
    },
    label: {
        color: AppColors.lightGrey,
        fontSize: 16,
        fontWeight:'bold',
        marginTop: 20,
        marginHorizontal:20,
    },
    input: {
        borderWidth: 1,
        borderColor: AppColors.grey,
        borderRadius: 10,
        marginHorizontal:20,
        padding: 10,
        marginTop: 10,
        fontSize: 16,
        marginBottom:30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 0.48,
    },
    button: {
        flex: 0.48,
        padding: 5,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 1,
        marginHorizontal:20,
        borderColor: AppColors.grey,
        marginBottom:10,
    },
    buttonSelected: {
        backgroundColor: AppColors.downy,
        borderColor: AppColors.downy,
    },
    buttonText: {
        color: '#b0bec5',
        fontSize: 16,
    },
    buttonTextSelected: {
        color: 'white',
    },
    nextButton: {
        backgroundColor: '#8e7cc3',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    nextButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default IVFCycle1;
