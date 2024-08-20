import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import WhiteButton from "../../../components/WhiteButton/WhiteButton";
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function BaselBodyTempScreen() {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.SymptomsScreen);
    };

    return (
        <View style={styles.container}>
            <Header headerText="Basal body temperature" />
            <View style={{ marginTop: 30 }}>
                <WhiteButton title="Basal body temperature" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
                <TouchableOpacity style={styles.dateIcon}>
                    <Text>📅</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.weightInputContainer}>
                <TextInput style={styles.weightInput} placeholder="70.3" keyboardType="numeric" />
                <TouchableOpacity style={styles.unitContainer}>
                    <Text style={styles.unitText}>C</Text>
                    <View style={styles.dropdownIcon}>
                        <Text style={styles.dropdownArrow}>▼</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Button
                title='Save'
                textColor={AppColors.white}
                backgroundColor={AppColors.downy}
                onPress={handlePress}
            />
            <TouchableOpacity style={styles.helpContainer}>
                <Text style={styles.helpText}>
                    <Text style={styles.helpIcon}>❓</Text> Can't Find The Relevant Answer? Click Here!
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: AppColors.white,
    },
    weightInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 20,
        width: '90%',
        alignSelf: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: AppColors.grey,
        borderWidth: 1,
        borderRadius: 30,
        width: width * 0.9,
        padding: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    dateIcon: {
        marginLeft: 10,
    },
    weightInput: {
        flex: 2,
        fontSize: 18,
        color: '#000',
    },
    unitContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderLeftColor: '#ddd',
        paddingLeft: 10,
    },
    unitText: {
        fontSize: 18,
        color: '#888',
    },
    dropdownIcon: {
        marginLeft: 5,
    },
    dropdownArrow: {
        fontSize: 18,
        color: '#888',
    },
    saveButton: {
        backgroundColor: AppColors.downy,
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 100,
        alignItems: 'center',
        marginBottom: 20,
    },
    saveButtonText: {
        fontSize: 16,
        color: AppColors.white,
        fontWeight: 'bold',
    },
    helpContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        alignItems: 'flex-start',
    },
    helpText: {
        fontSize: 14,
        color: AppColors.grey,
        textAlign: 'center',
    },
    helpIcon: {
        color: AppColors.downy,
    },
});
