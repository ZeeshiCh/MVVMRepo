import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../BottomTabNavigator/BottomTabNavigator";
import CustomDrawerContent from "../../components/Drawer/Drawer";
import YourInformation from "../../screens/appFlow/YourInformation/YourInformation";
import IVFCalculator from "../../screens/appFlow/IVFCalculator/IVFCalculator";
import HelpAndSupport from "../../screens/appFlow/HelpAndSupport/HelpAndSupport";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerPosition: "right",
                drawerStyle: {
                    width: 350,
                    backgroundColor: "rgba(224, 247, 250, 0.8)", // Lower opacity background color
                    borderTopLeftRadius: 100,
                    borderBottomLeftRadius: 100,
                    overflow: 'hidden',
                },
            }}
        >
            <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            <Drawer.Screen name="YourInformation" component={YourInformation} />
            <Drawer.Screen name="IVFCalculator" component={IVFCalculator} />
            <Drawer.Screen name="HelpAndSupport" component={HelpAndSupport} />
        </Drawer.Navigator>
    );
}
