import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Header = ({ headerText }) => {
    return (
        <View style={styles.header}>
            <View style={styles.profileIcon}></View>
            <Text style={styles.headerText}>{headerText}</Text>
            <TouchableOpacity style={styles.menuIcon}>
                <Text style={styles.menuText}>≡</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 20,
        backgroundColor: '#8ed5d7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    profileIcon: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 15,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    menuIcon: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuText: {
        fontSize: 40,
        color: '#fff',
    },
});

export default Header;
