import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from 'react-native';
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import AppColors from "../../../utils/AppColors/AppColors";
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header headerText="My Profile" />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Important information about IVF procedure</Text>

                <View style={styles.stageSteps}>
                    <View style={styles.step}>
                        <Image source={require('../../../assets/images/profileimages/image1.png')} style={styles.image} />
                        <Text style={styles.stepTextActive}>Tests</Text>
                    </View>
                    <View style={styles.step1}>
                        <Image source={require('../../../assets/images/profileimages/image2.png')} style={styles.image} />
                        <Text style={styles.stepText}>Energizing</Text>
                    </View>
                    <View style={styles.step1}>
                        <Image source={require('../../../assets/images/profileimages/image3.png')} style={styles.image} />
                        <Text style={styles.stepText}>Recovery</Text>
                    </View>
                    <View style={styles.step1}>
                        <Image source={require('../../../assets/images/profileimages/image4.png')} style={styles.image} />
                        <Text style={styles.stepText}>Transformation</Text>
                    </View>
                </View>

                <View style={styles.stageSteps}>
                    <View style={styles.step1}>
                        <Image source={require('../../../assets/images/profileimages/image5.png')} style={styles.image} />
                        <Text style={styles.stepText}>Wait two weeks</Text>
                    </View>
                    <View style={styles.step1}>
                        <Image source={require('../../../assets/images/profileimages/image6.png')} style={styles.image} />
                        <Text style={styles.stepText}>Pharmacological stimulation</Text>
                    </View>
                    <View style={styles.step1}>
                        <Image source={require('../../../assets/images/profileimages/image7.png')} style={styles.image} />
                        <Text style={styles.stepText}>Egg retrieval</Text>
                    </View>
                    <View style={styles.step1}>
                        <Image source={require('../../../assets/images/profileimages/image3.png')} style={styles.image} />
                        <Text style={styles.stepText}>Embryo transfer</Text>
                    </View>
                </View>

                <View style={styles.stageSteps}>
                    <View style={styles.step1}>
                        <Image source={require('../../../assets/images/profileimages/image8.png')} style={styles.image} />
                        <Text style={styles.stepText}>Be empowered</Text>
                    </View>
                </View>

                <View style={styles.contactContainer}>
                    <Text style={styles.contactTitle}>Disclaimer</Text>
                    <Text style={styles.contactText}>
                        In order to proceed with your IVF file, you need to read or see important information. Click "I agree" to continue.
                    </Text>
                </View>
            </View>
            <Button
                title="I Agree"
                backgroundColor="#8ed5d7"
                textColor="white"
                onPress={() => NavigationService.navigate(ScreenNames.ProfileInfo)}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: AppColors.white,
        paddingTop: 20,
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    image: {
        marginTop: 10,
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: AppColors.grey,
        textAlign: 'center',
    },
    stageSteps: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        width: '100%',
        paddingHorizontal: 20,
    },
    step: {
        backgroundColor: AppColors.downyCircle,
        height: 70,
        width: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    step1: {
        backgroundColor: AppColors.white,
        height: 70,
        width: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    stepText: {
        color: AppColors.grey,
        marginTop: 5,
        textAlign: 'center',
    },
    stepTextActive: {
        color: AppColors.downy,
        marginTop: 5,
        textAlign: 'center',
    },
    contactContainer: {
        width: width * 0.9,
        padding: 20,
        height: 150,
        backgroundColor: 'rgba(233, 245, 245, 0.3)',
        borderColor: '#8ed5d7',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 20,
        marginTop: 50,
    },
    contactTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: AppColors.lavenderBlue,
        marginBottom: 10,
    },
    contactText: {
        fontSize: 16,
        color: AppColors.grey,
    },
});
