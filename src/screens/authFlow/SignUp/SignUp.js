import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from "../../../components/TextInput/TextInput";
import Button from "../../../components/Button/Button";
import AppColors from "../../../utils/AppColors/AppColors";
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [birthMonth, setBirthMonth] = useState('');

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Let us get you signed up</Text>
            </View>
            <CustomTextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <CustomTextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={birthYear}
                    style={styles.picker}
                    onValueChange={(itemValue) => setBirthYear(itemValue)}
                >
                    <Picker.Item label="Year of Birth" value="" />
                </Picker>
                <Picker
                    selectedValue={birthMonth}
                    style={styles.picker}
                    onValueChange={(itemValue) => setBirthMonth(itemValue)}
                >
                    <Picker.Item label="Birth Month" value="" />
                </Picker>
            </View>
            <Button
                title="NEXT"
                backgroundColor={AppColors.lavenderBlue}
                textColor="white"
                onPress={() => NavigationService.navigate(ScreenNames.ConfirmPassword)}
            />
            {/* <Text style={styles.footerText}>هل لديك حساب؟ تسجيل الدخول</Text> */}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.bgcolor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    textContainer: {
        width: '100%',
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        color: AppColors.downy,
        marginBottom: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    pickerContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    picker: {
        flex: 1,
        height: 50,
        backgroundColor: AppColors.white,
        borderRadius: 50,
        marginHorizontal: 5,
    },
    footerText: {
        color: AppColors.black,
        textAlign: 'center',
        fontSize: 16,
    },
});
