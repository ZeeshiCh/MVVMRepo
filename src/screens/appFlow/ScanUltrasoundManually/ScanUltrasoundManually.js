import React from 'react';
import { StyleSheet, View, Image, Dimensions, TextInput } from 'react-native';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function ScanUltrasoundManually() {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.UltrasoundResult);
    };

    return (
        <View style={styles.container}>
            <Header headerText="Ultrasound" />
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/info1bg.png')}
                    style={styles.backgroundImage}
                />
                <Image
                    source={require('../../../assets/images/ultra-sound.png')}
                    style={styles.foregroundImage}
                />
            </View>
            <View style={styles.desc}>
                <TextInput style={styles.input1} placeholder="dd/mm/yyyy" />
                <TextInput style={styles.input1} placeholder="Lining size(mm)" />
                <TextInput style={styles.input1} placeholder="Lining size(mm)" />
                <TextInput style={styles.input1} placeholder="Lining size(mm)" />
            </View>
            <Button
                title="Next"
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
        marginTop: 100,
        position: 'relative',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
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
    desc: {
        alignItems: 'center',
        paddingVertical: 10,
        width: '100%',
        paddingHorizontal: 20,
    },
    input1: {
        backgroundColor: AppColors.white,
        borderRadius: 10,
        height: 50,
        width: '100%',
        paddingHorizontal: 15,
        fontSize: 16,
        borderColor: AppColors.grey,
        borderWidth: 0.3,
        marginBottom: 10,
        textAlign: 'left',
    },
});
