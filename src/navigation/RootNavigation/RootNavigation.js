import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "../AppNavigator";
import DrawerNavigator from "../DrawerNavigation/DrawerNavigation";
import { SafeAreaView } from "react-native";

const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
                    <Stack.Screen name="AppNavigator" component={AppNavigator} />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}
