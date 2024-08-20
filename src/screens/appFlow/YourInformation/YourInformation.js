import { StyleSheet, Text, View, TextInput,Image } from 'react-native';
import React, { useState } from 'react';
import AppColors from "../../../utils/AppColors/AppColors";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import Header from "../../../components/Header/Header";
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

export default function YourInformation() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    return (
        <View style={styles.container}>
            <Header headerText="Your Profile" />
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/yourprofile.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.contentContainer}>
                <TextInput
                    placeholder="Your Name"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="YourName@mail.com"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Date of Birth"
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Change Password"
                    backgroundColor={AppColors.downy}
                    textColor={AppColors.white}
                    onPress={() => NavigationService.navigate(ScreenNames.UpdatePassword)}
                />
                <Button
                    title="Save"
                    backgroundColor={AppColors.lavenderBlue}
                    textColor={AppColors.white}
                    onPress={() => NavigationService.navigate(ScreenNames.Home)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: 20,
        alignItems: 'center',
    },
    contentContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 50,
    },
    imageContainer: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop:50,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    input: {
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        height: 50,
        width: '100%',
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
        marginBottom: 60,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    footerText: {
        color: AppColors.grey,
        fontSize: 14,
    },
    loginText: {
        fontSize: 14,
        color: AppColors.downy,
        fontWeight: 'bold',
    },
});
