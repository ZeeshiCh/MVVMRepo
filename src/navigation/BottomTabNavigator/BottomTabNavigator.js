import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../../screens/appFlow/HomeScreen/HomeScreen";
import CalendarScreen from "../../screens/appFlow/CalenderScreen/CalenderScreen";
import TreatmentScreen from "../../screens/appFlow/TreatmentScreen/TreatmentScreen";
import ProfileScreen from "../../screens/appFlow/ProfileScreen/ProfileScreen";
import { Ionicons } from '@expo/vector-icons';
import AppColors from "../../utils/AppColors/AppColors";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Calendar':
                            iconName = 'calendar';
                            break;
                        case 'Treatment':
                            iconName = 'heart';
                            break;
                        case 'Profile':
                            iconName = 'person';
                            break;
                        default:
                            iconName = 'home';
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: AppColors.lavenderBlue,
                tabBarInactiveTintColor: AppColors.white,
                tabBarStyle: {
                    backgroundColor: AppColors.downy,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingBottom: 10,
                    paddingTop: 10,
                    height: 70,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerShown: false }} />
            <Tab.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Calender', headerShown: false }} />
            <Tab.Screen name="Treatment" component={TreatmentScreen} options={{ title: 'My Treatment', headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile', headerShown: false }} />
        </Tab.Navigator>
    );
}
