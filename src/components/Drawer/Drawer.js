import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
import ScreenNames from "../../navigation/ScreenNames";

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            <View style={styles.headerSection}>
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                    <Ionicons name="close" size={24} color="#918EF4" />
                </TouchableOpacity>
                <Text style={styles.profileText}>Your Profile</Text>
                <Ionicons name="person-circle" size={42} color="#918EF4" />
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate(ScreenNames.YourInformation)}>
                <Text style={styles.drawerItem}>Your Information</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate(ScreenNames.IVFCalculator)}>
                <Text style={styles.drawerItem}>IVF Success Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate(ScreenNames.HelpAndSupport)}>
                <Text style={styles.drawerItem}>Help/Support and Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.drawerItem}>Logout</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E0F7FA",
    },
    headerSection: {
        padding: 20,
        paddingVertical: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },
    profileText: {
        fontSize: 24,
        color: "#918EF4",
        fontWeight: "bold",
    },
    drawerItem: {
        padding: 25,
        fontSize: 18,
        fontWeight: '400',
        color: "#004D40",
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },
});

export default CustomDrawerContent;
