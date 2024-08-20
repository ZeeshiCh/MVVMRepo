import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

const AddNewCycle = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header headerText="IVF/ICSI May 2024" />

            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/mycycle.png')}
                    style={styles.image}
                />
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.iconWrapper}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.headerText}>IVF/ICSI</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoCard}>
                    <Text style={styles.infoText}>Starting Date</Text>
                    <Text style={styles.infoValue}>27/05/2024</Text>
                    <View style={styles.separator} />
                    <Text style={styles.infoText}>Protocol Type</Text>
                    <Text style={styles.infoValue}>Antagonist</Text>
                </View>

                <View style={styles.circlesRow}>
                    <TouchableOpacity style={styles.greenCircle} onPress={() => NavigationService.navigate(ScreenNames.EmbyroEgg)}>
                        <Image
                            source={require('../../../assets/images/embyro.png')}
                            style={styles.circleImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.greenCircle}>
                        <Image
                            source={require('../../../assets/images/us.png')}
                            style={styles.circleImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.greenCircle} onPress={() => NavigationService.navigate(ScreenNames.PregnancyTestScan)}>
                        <Image
                            source={require('../../../assets/images/labs.png')}
                            style={styles.circleImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.greenCircle} onPress={() => NavigationService.navigate(ScreenNames.MedicationReminder)}>
                        <Image
                            source={require('../../../assets/images/meds.png')}
                            style={styles.circleImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AddNewCycle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        alignItems: 'center',
        paddingTop: 20,
    },
    imageContainer: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    iconWrapper: {
        alignItems: 'center',
        marginBottom: 30,
    },
    greenCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        // backgroundColor: '#80cfd5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop:50,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    infoContainer: {
        width: '100%',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppColors.grey,
    },
    infoCard: {
        width: width * 0.9,
        padding: 20,
        borderRadius: 10,
        backgroundColor: AppColors.white,
        marginBottom: 20,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    infoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppColors.grey,
    },
    infoValue: {
        fontSize: 14,
        fontWeight: '600',
        color: AppColors.lightGrey,
        marginBottom: 10,
        marginTop:20,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: AppColors.grey,
        marginVertical: 10,
    },
    circlesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
        paddingTop:20,
    },
    textButtonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    iconLabel: {
        fontSize: 14,
        color: AppColors.downy,
    },
});
