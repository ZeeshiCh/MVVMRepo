import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function ProfileDetail() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <Header headerText="My Profile" />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>MY IVF CYCLE</Text>
                <View style={styles.circleContainer}>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>Today</Text>
                        <Text style={styles.dateText}>Friday, 22 Aug</Text>
                        <Text style={styles.dayText}>11. Cycle Day</Text>
                        <Text style={styles.waitText}>Waiting time</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.overviewButton}>
                    <Text style={styles.buttonText}>Treatment overview</Text>
                </TouchableOpacity>
                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => NavigationService.navigate(ScreenNames.HealthProfile)}>
                        <Image source={require('../../../assets/images/yourhealth.png')} style={styles.image} />
                        <Text style={styles.menuText}>Your Health Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => NavigationService.navigate(ScreenNames.MyCycle)}>
                        <Image source={require('../../../assets/images/currentcycle.png')} style={styles.image} />
                        <Text style={styles.menuText}>Your current cycle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => NavigationService.navigate(ScreenNames.PreviousCycle)}>
                        <Image source={require('../../../assets/images/previouscycle.png')} style={styles.image} />
                        <Text style={styles.menuText}>Your previous cycle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => NavigationService.navigate(ScreenNames.EmbyroEgg)}>
                        <Image source={require('../../../assets/images/egg.png')} style={styles.image} />
                        <Text style={styles.menuText}>The embryo and the egg</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => NavigationService.navigate(ScreenNames.PregnancyTestScan)}>
                        <Image source={require('../../../assets/images/pregtab.png')} style={styles.image} />
                        <Text style={styles.menuText}>Pregnancy tab</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Important information about IVF procedure</Text>
                <View style={styles.stepsContainer}>
                    <View style={styles.stepRow}>
                        <TouchableOpacity style={styles.step} onPress={() => NavigationService.navigate(ScreenNames.TestsScreen)}>
                            <Image source={require('../../../assets/images/profileimages/image1.png')} style={styles.stepIcon} />
                            <Text style={styles.stepText}>Tests</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.step} onPress={() => NavigationService.navigate(ScreenNames.EnergizingScreen)}>
                            <Image source={require('../../../assets/images/profileimages/image1.png')} style={styles.stepIcon} />
                            <Text style={styles.stepText}>Energizing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.step} onPress={() => NavigationService.navigate(ScreenNames.RecoveryScreen)}>
                            <Image source={require('../../../assets/images/profileimages/image1.png')} style={styles.stepIcon} />
                            <Text style={styles.stepText}>Recovery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.step} onPress={() => NavigationService.navigate(ScreenNames.TransformationScreen)}>
                            <Image source={require('../../../assets/images/profileimages/image1.png')} style={styles.stepIcon} />
                            <Text style={styles.stepText}>Transformation</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.stepRow}>
                        <TouchableOpacity style={styles.step} onPress={() => NavigationService.navigate(ScreenNames.WaitForWeeksScreen)}>
                            <Image source={require('../../../assets/images/profileimages/image1.png')} style={styles.stepIcon} />
                            <Text style={styles.stepText}>Wait Two Weeks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.step} onPress={() => NavigationService.navigate(ScreenNames.DrugStimulationScreen)}>
                            <Image source={require('../../../assets/images/profileimages/image1.png')} style={styles.stepIcon} />
                            <Text style={styles.stepText}>Pharmacological Stimulation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.step} onPress={() => NavigationService.navigate(ScreenNames.EggRetrivalScreen)}>
                            <Image source={require('../../../assets/images/profileimages/image1.png')} style={styles.stepIcon} />
                            <Text style={styles.stepText}>Egg Retrieval</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.step} onPress={() => NavigationService.navigate(ScreenNames.EmbyroTransferScreen)}>
                            <Image source={require('../../../assets/images/profileimages/image1.png')} style={styles.stepIcon} />
                            <Text style={styles.stepText}>Embryo Transfer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.stepRow}>
                        <TouchableOpacity style={styles.step} onPress={() => NavigationService.navigate(ScreenNames.BeEmpoweredScreen)}>
                            <Image source={require('../../../assets/images/profileimages/image1.png')} style={styles.stepIcon} />
                            <Text style={styles.stepText}>Be Empowered</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.showAllButton}>
                    <Text style={styles.showAllText}>Show all</Text>
                </TouchableOpacity>
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
    contentContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: AppColors.grey,
        marginVertical: 20,
        textAlign:'center'
    },
    circleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: AppColors.downy_70,
        borderRadius: 140,
    },
    circle: {
        margin: 10,
        width: 260,
        height: 260,
        borderRadius: 130,
        borderWidth: 10,
        borderColor: AppColors.lavenderBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleText: {
        fontSize: 18,
        color: AppColors.white,
    },
    dateText: {
        fontSize: 16,
        color: AppColors.white,
        marginTop: 5,
        paddingBottom: 10,
    },
    dayText: {
        fontSize: 29,
        fontWeight: 'bold',
        color: AppColors.white,
        marginTop: 10,
    },
    waitText: {
        fontSize: 18,
        color: AppColors.white,
        marginTop: 5,
    },
    overviewButton: {
        backgroundColor: AppColors.lavenderBlue,
        borderRadius: 25,
        width: width * 0.4,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
    menuContainer: {
        width: width * 0.9,
    },
    image: {
        height:50,
        width: 50,
        resizeMode: 'contain'
    },
    menuItem: {
        backgroundColor: AppColors.white,
        borderRadius: 10,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    menuText: {
        fontSize: 16,
        fontWeight: '700',
        color: AppColors.grey,
        marginLeft:10,
    },

    stepsContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    stepRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width * 0.9,
        marginBottom: 40,
    },
    step: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: AppColors.downy,
        marginBottom: 20,
    },
    stepIcon: {
        width: 50,
        height: 50,
        marginTop:50,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    stepText: {
        fontSize: 16,
        fontWeight:'bold',
        marginTop:20,
        color: AppColors.downy,
        textAlign: 'center',
    },
    showAllButton: {
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 2,
    },
    showAllText: {
        fontSize: 14,
        color: AppColors.lavenderBlue,
    },
});
