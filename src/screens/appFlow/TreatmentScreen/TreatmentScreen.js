import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function TreatmentScreen() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Header headerText="My Treatment" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.menuContainer}>
                    <Text style={styles.title}>Determine your IVF cycle</Text>

                    <TouchableOpacity style={styles.menuItem} onPress={() => NavigationService.navigate(ScreenNames.Pharmaceutical)}>
                        <Image
                            source={require('../../../assets/images/pharma.png')}
                            style={styles.menuIcon}
                        />
                        <Text style={styles.menuText}>Pharmaceutical</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => NavigationService.navigate(ScreenNames.ScanLabReport)}>
                        <Image
                            source={require('../../../assets/images/lab.png')}
                            style={styles.menuIcon}
                        />
                        <Text style={styles.menuText}>Laboratory Results</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => NavigationService.navigate(ScreenNames.ScanUltrasound)}>
                        <Image
                            source={require('../../../assets/images/ultrasound.png')}
                            style={styles.menuIcon}
                        />
                        <Text style={styles.menuText}>Ultrasound</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => NavigationService.navigate(ScreenNames.ScanSpouseReport)}>
                        <Image
                            source={require('../../../assets/images/husbandreport.png')}
                            style={styles.menuIcon}
                        />
                        <Text style={styles.menuText}>Husband Report</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    scrollViewContent: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    menuContainer: {
        width: width * 0.9,
        marginTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: AppColors.grey,
        marginVertical: 20,
        textAlign:'center'
    },
    menuItem: {
        backgroundColor: AppColors.white,
        borderRadius: 10,
        borderColor: AppColors.downy,
        borderWidth:0.7,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    menuIcon: {
        width: 80,
        height: 80,
        borderRadius: 25,
        backgroundColor: AppColors.lightCherryBlossom,
    },
    menuText: {
        fontSize: 18,
        color: AppColors.grey,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});
