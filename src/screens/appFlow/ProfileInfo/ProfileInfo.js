import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Header from "../../../components/Header/Header";
import { useNavigation } from '@react-navigation/native';
import AppColors from "../../../utils/AppColors/AppColors";
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const { width } = Dimensions.get('window');

export default function ProfileInfo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header headerText="My Profile" />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>MY IVF CYCLE</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="dd/mm/yyyy"
                        placeholderTextColor="#999"
                        textAlign="left"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cycle Day"
                        placeholderTextColor="#999"
                        textAlign="left"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Estrogen"
                        placeholderTextColor="#999"
                        textAlign="left"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Progesterone"
                        placeholderTextColor="#999"
                        textAlign="left"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="LH"
                        placeholderTextColor="#999"
                        textAlign="left"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Lining Thickness"
                        placeholderTextColor="#999"
                        textAlign="left"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Lining Type"
                        placeholderTextColor="#999"
                        textAlign="left"
                    />
                    <View style={styles.folliclesContainer}>
                        <View style={styles.follicleColumn}>
                            <TextInput
                                style={styles.smallInput}
                                placeholder="Amount"
                                placeholderTextColor="#999"
                                textAlign="left"
                            />
                            <TextInput
                                style={styles.smallInput}
                                placeholder="Size"
                                placeholderTextColor="#999"
                                textAlign="left"
                            />
                        </View>
                        <TextInput
                            style={styles.largeInput}
                            placeholder="Follicles Right"
                            placeholderTextColor="#999"
                            textAlign="left"
                        />
                    </View>
                    <View style={styles.folliclesContainer}>
                        <View style={styles.follicleColumn}>
                            <TextInput
                                style={styles.smallInput}
                                placeholder="Amount"
                                placeholderTextColor="#999"
                                textAlign="left"
                            />
                            <TextInput
                                style={styles.smallInput}
                                placeholder="Size"
                                placeholderTextColor="#999"
                                textAlign="left"
                            />
                        </View>
                        <TextInput
                            style={styles.largeInput}
                            placeholder="Follicles Left"
                            placeholderTextColor="#999"
                            textAlign="left"
                        />
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.button, styles.skipButton]}>
                        <Text style={styles.buttonText}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationService.navigate(ScreenNames.ProfileDetail)} style={[styles.button, styles.nextButton]}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: 20,
        alignItems: 'center'
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
    },
    inputContainer: {
        width: width * 0.9,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'left',
        backgroundColor: 'transparent',
    },
    folliclesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    follicleColumn: {
        width: '40%',
    },
    smallInput: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'left',
        backgroundColor: 'transparent',
    },
    largeInput: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        width: '55%',
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'left',
        backgroundColor: 'transparent',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        marginTop: 20,
    },
    button: {
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipButton: {
        flex: 1,
        backgroundColor: AppColors.lavenderBlue,
        marginRight: 10,
    },
    nextButton: {
        flex: 1.5,
        backgroundColor: AppColors.downy,
        marginLeft: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
});
