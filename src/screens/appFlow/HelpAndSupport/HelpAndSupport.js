import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";

const HelpAndSupport = () => {
    const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState('Arabic');

    const toggleSwitch = () => setNotificationsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Header headerText="Help/Support and HelpAndSupport" />
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.heading}>HelpAndSupport</Text>
                <View style={styles.section}>
                    <View style={styles.row}>
                        <Image source={require('../../../assets/images/notification.png')} style={styles.icon} />
                        <Text style={styles.text}>Notifications</Text>
                        <Switch
                            trackColor={{ false: AppColors.lightGrey, true: AppColors.downy }}
                            thumbColor={isNotificationsEnabled ? AppColors.downy : AppColors.white}
                            ios_backgroundColor={AppColors.lightGrey}
                            onValueChange={toggleSwitch}
                            value={isNotificationsEnabled}
                            style={styles.switch}
                        />
                    </View>
                </View>
                <View style={styles.divider} />
                <Text style={styles.heading}>Languages</Text>
                <View style={styles.section}>
                    <TouchableOpacity style={styles.row} onPress={() => setSelectedLanguage('Arabic')}>
                        <Image source={require('../../../assets/images/arabia.png')} style={styles.icon} />
                        <Text style={styles.text}>Arabic</Text>
                        <View style={selectedLanguage === 'Arabic' ? styles.selectedCircle : styles.circle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row} onPress={() => setSelectedLanguage('English')}>
                        <Image source={require('../../../assets/images/english.png')} style={styles.icon} />
                        <Text style={styles.text}>English</Text>
                        <View style={selectedLanguage === 'English' ? styles.selectedCircle : styles.circle} />
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <Text style={styles.heading}>Help And Support</Text>
                <Text style={styles.supportText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: AppColors.white,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppColors.grey,
        marginVertical: 10,
    },
    section: {
        backgroundColor: AppColors.white,
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        color: AppColors.grey,
        flex: 1,
        marginLeft: 10,
    },
    switch: {
        alignSelf: 'flex-end',
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: AppColors.grey,
    },
    selectedCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: AppColors.downy,
        backgroundColor: AppColors.downy,
    },
    divider: {
        borderBottomColor: AppColors.lightGrey,
        borderBottomWidth: 1,
        marginVertical: 20,
    },
    supportText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: AppColors.lightGrey,
        marginTop: 10,
        lineHeight: 25,
    },
});

export default HelpAndSupport
