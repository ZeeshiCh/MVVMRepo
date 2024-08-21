import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

import Image1 from '../../../assets/images/precycle.png';

export default function MyPreviousCycles() {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.AddNewCycle);
    };
    return (
        <View style={styles.container}>
            <Header headerText="Your Previous Cycles" />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Your Previous Cycles</Text>
                <TouchableOpacity style={styles.cycleButton}>
                    <View style={styles.iconWrapper}>
                        <Image source={Image1} style={styles.iconImage} />
                    </View>
                    <Text style={styles.cycleText}>IVF/ICSI May 2024</Text>
                </TouchableOpacity>
                <Button
                    title="Add New Cycle"
                    backgroundColor={AppColors.downy}
                    textColor="white"
                    onPress={handlePress}
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
    },
    contentContainer: {
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppColors.grey,
        marginBottom: 20,
    },
    cycleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 100,
        width: width * 0.9,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    iconWrapper: {
        marginRight: 10,
        backgroundColor: AppColors.lavenderBlue,
        borderRadius: 30,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImage: {
        height: 20,
        width: 20,
    },
    cycleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppColors.grey,
    },
});
