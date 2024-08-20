import React from 'react';
import { StyleSheet, View, Image, Dimensions,Text } from 'react-native';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function ScanLabReport() {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.LabReportResult);
    };
    return (
        <View style={styles.container}>
            <Header headerText="Laboratory results" />
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/info1bg.png')}
                    style={styles.backgroundImage}
                />
                <Image
                    source={require('../../../assets/images/lab.png')}
                    style={styles.foregroundImage}
                />
            </View>
            <Text style={styles.text}>Add your lab reports</Text>
            <Button
                title="Scan your report"
                backgroundColor={AppColors.downy}
                textColor="white"
                onPress={handlePress}
            />
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
    imageContainer: {
        marginTop:100,
        position: 'relative',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:100,
    },
    backgroundImage: {
        position: 'absolute',
        width: 250,
        height: 250,
        resizeMode: 'cover',
    },
    foregroundImage: {
        position: 'absolute',
        width: 230,
        height: 230,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 20,
        color: AppColors.grey,
        textAlign: 'center',
        paddingHorizontal: 40,
        fontWeight: 'bold',
        marginBottom: 40,
    },
});
