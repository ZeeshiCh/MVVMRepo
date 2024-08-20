import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function HealthProfile() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <Header headerText="Your Health Profile" />
            <View style={styles.card1}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Menstrual Period</Text>
                    <TouchableOpacity>
                        <Text style={styles.optionsIcon}>⋮</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.row}>
                        <Text style={styles.dataLabel}>Turn</Text>
                        <Text style={styles.dataValue}>AVG</Text>
                        <Text style={styles.dataUnit}>cm</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.dataLabel}>TTC</Text>
                        <Text style={styles.dataValue}>1.1</Text>
                        <Text style={styles.dataUnit}>year.month</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.dataLabel}>Weight</Text>
                        <Text style={styles.dataValue}>80</Text>
                        <Text style={styles.dataUnit}>kg</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.dataLabel}>Height</Text>
                        <Text style={styles.dataValue}>180</Text>
                        <Text style={styles.dataUnit}>cm</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card1}>

                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Hormonal Panel</Text>
                    <TouchableOpacity onPress={() => NavigationService.navigate(ScreenNames.HormonalPanel)}>
                        <Text style={styles.optionsIcon}>⋮</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.card}>

                <View style={styles.cardContent}>
                </View>
            </View>

            <View style={styles.card1}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Treatment History</Text>
                    <TouchableOpacity>
                        <Text style={styles.optionsIcon}>⋮</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.card}>

                <View style={styles.cardContent}>
                    <Text style={styles.dataValue}>0</Text>
                    <Text style={styles.dataUnit}>Day</Text>
                </View>
            </View>

            <View style={styles.card1}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Previous Pregnancies</Text>
                    <TouchableOpacity>
                        <Text style={styles.optionsIcon}>⋮</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.card}>

                <View style={styles.cardContent}>
                </View>
            </View>

            <View style={styles.card1}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Reason For Treatment</Text>
                    <TouchableOpacity>
                        <Text style={styles.optionsIcon}>⋮</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.card}>

                <View style={styles.cardContent}>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: 20,
    },
    card1: {
        backgroundColor: AppColors.downy,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginTop: 20,
    },
    card: {
        backgroundColor: AppColors.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 20,
        marginBottom: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: AppColors.downy,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: AppColors.white,
    },
    optionsIcon: {
        fontSize: 24,
        color: AppColors.white,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
    },
    row: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    dataLabel: {
        fontSize: 12,
        color: AppColors.downy,
        marginRight: 5,
    },
    dataValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppColors.downy,
    },
    dataUnit: {
        fontSize: 12,
        color: AppColors.downy,
        marginLeft: 5,
    },
});
