import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity,Image } from 'react-native';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import Button from "../../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function EmbyroEgg() {
    const navigation = useNavigation();

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.EmbyroReport);
    };

    return (
        <View style={styles.container}>
            <Header headerText="The embryo and the egg" />
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/embyroegg.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.footerText}>Oocytes and embryos</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
                <TextInput style={styles.input} placeholder="Number Of Eggs" />
                <TextInput style={styles.input} placeholder="Number Of Fetuses (Total)" />
                <View style={styles.row}>
                    <TextInput style={[styles.input, styles.halfInput]} placeholder="Number Of Embryos Transferred" />
                    <Picker style={[styles.input, styles.halfInput]} placeholder="Age Of The Fetus">
                        <Picker.Item label="Age Of The Fetus" value="" />
                        <Picker.Item label="1 week" value="1" />
                        <Picker.Item label="2 weeks" value="2" />
                        <Picker.Item label="3 weeks" value="3" />
                    </Picker>
                </View>
                <TextInput style={styles.input} placeholder="Numbers Of Frozen Embryos" />
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
        alignItems: 'center',
        paddingTop: 20,
    },
    imageContainer: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        marginTop:50,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    textContainer: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 30,
    },
    footerText: {
        fontSize: 28,
        color: AppColors.grey,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    formContainer: {
        width: '90%',
        alignItems: 'center',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: AppColors.grey,
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
    },
});
