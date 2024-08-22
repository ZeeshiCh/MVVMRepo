import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppColors from "../../../utils/AppColors/AppColors";
import InfoContainer from "../../../components/InfoContainer/InfoContainer";
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

// Import the emotion images
import HappyIcon from '../../../assets/images/homeemoji/emoji1.png';
import CalmIcon from '../../../assets/images/homeemoji/emoji2.png';
import NeutralIcon from '../../../assets/images/homeemoji/emoji3.png';
import SadIcon from '../../../assets/images/homeemoji/emoji4.png';
import AngryIcon from '../../../assets/images/homeemoji/emoji5.png';
import Image1 from '../../../assets/images/home8.png';
import Image2 from '../../../assets/images/home9.png';
import Image3 from '../../../assets/images/home10.png';
import Image4 from '../../../assets/images/home8.png';
import Image5 from '../../../assets/images/home5.png';
import Image6 from '../../../assets/images/home6.png';
import Image7 from '../../../assets/images/home7.png';

const cards = [
    { title: 'They read “Adsala Jalaa”.', subtitle: 'Rasṭḥam lākṣb, Jatnamla Saw, Jatnamla Saw', image: Image1 },
    { title: 'They read “Adsala Jalaa”.', subtitle: 'Rasṭḥam lākṣb, Jatnamla Saw, Jatnamla Saw', image: Image2 },
    { title: 'They read “Adsala Jalaa”.', subtitle: 'Rasṭḥam lākṣb, Jatnamla Saw, Jatnamla Saw', image: Image3 },
    { title: 'They read “Adsala Jalaa”.', subtitle: 'Rasṭḥam lākṣb, Jatnamla Saw, Jatnamla Saw', image: Image4 },
];

const generateWeekDates = (startDate) => {
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        weekDates.push(date);
    }
    return weekDates;
};

const formatDate = (date) => {
    const day = date.getDate();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    return { day, weekday };
};

const EMOTIONS = [
    { label: 'Happy', color: 'green', image: HappyIcon },
    { label: 'Calm', color: 'blue', image: CalmIcon },
    { label: 'Neutral', color: 'yellow', image: NeutralIcon },
    { label: 'Sad', color: 'orange', image: SadIcon },
    { label: 'Angry', color: 'red', image: AngryIcon },
];

export default function HomeScreen() {
    const navigation = useNavigation();
    const today = new Date();
    const weekDates = generateWeekDates(today);

    const [selectedDate, setSelectedDate] = useState(today.toDateString());
    const [selectedEmotion, setSelectedEmotion] = useState(2);

    const handleDatePress = (date) => {
        setSelectedDate(date.toDateString());
    };

    const handleSliderChange = (value) => {
        setSelectedEmotion(value);
    };

    const tasks = [
        { time: '6:00 PM', title: 'Take a prescription', subtitle: 'Paracetamol, 10 mg', image: Image5 },
        { title: 'Your daily symptoms', subtitle: 'happy red spotting, etc', image: Image6 },
        { time: '7:00 PM', title: 'Laboratory test', subtitle: 'Text or note reminds the patient', image: Image7 },
    ];

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            {/*<View style={styles.header}>*/}
            {/*    <View style={styles.profileIcon}>*/}
            {/*        <Ionicons name="person-circle" size={42} color="white" />*/}
            {/*    </View>*/}
            {/*    <Text style={styles.headerText}>Home page</Text>*/}
            {/*    <TouchableOpacity style={styles.menuIcon} onPress={() => NavigationService.navigate(ScreenNames.YourInformation)}>*/}
            {/*        <Ionicons name="menu" size={32} color="white" />*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}
            {/*<View style={styles.header}>*/}
            {/*    <View style={styles.profileIcon}>*/}
            {/*        <Ionicons name="person-circle" size={42} color="white" />*/}
            {/*    </View>*/}
            {/*    <Text style={styles.headerText}>Home page</Text>*/}
            {/*    <TouchableOpacity style={styles.menuIcon} onPress={() => NavigationService.navigate(ScreenNames.IVFCalculator)}>*/}
            {/*        <Ionicons name="menu" size={32} color="white" />*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}
            {/*<View style={styles.header}>*/}
            {/*    <View style={styles.profileIcon}>*/}
            {/*        <Ionicons name="person-circle" size={42} color="white" />*/}
            {/*    </View>*/}
            {/*    <Text style={styles.headerText}>Home page</Text>*/}
            {/*    <TouchableOpacity style={styles.menuIcon} onPress={() => NavigationService.navigate(ScreenNames.HelpAndSupport)}>*/}
            {/*        <Ionicons name="menu" size={32} color="white" />*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}

            <View style={styles.header}>
                <View style={styles.profileIcon}>
                    <Ionicons name="person-circle" size={42} color="white" />
                </View>
                <Text style={styles.headerText}>Home page</Text>
                <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={32} color="white" />
                </TouchableOpacity>
            </View>


            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome aboard user</Text>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.stageContainer}>
                    <Text style={styles.stageTitle}>Your Profile</Text>
                    <View style={styles.stageSteps}>
                        <View style={styles.step}>
                            <Image source={require('../../../assets/images/home1.png')} style={styles.image} />
                            <Text style={styles.stepTextActive}>Basic</Text>
                        </View>
                        <View style={styles.step1}>
                            <Image source={require('../../../assets/images/home2.png')} style={styles.image} />
                            <Text style={styles.stepText}>Basic</Text>
                        </View>
                        <View style={styles.step1}>
                            <Image source={require('../../../assets/images/home3.png')} style={styles.image} />
                            <Text style={styles.stepText}>Basic</Text>
                        </View>
                        <View style={styles.step1}>
                            <Image source={require('../../../assets/images/home4.png')} style={styles.image} />
                            <Text style={styles.stepText}>Basic</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.calendarContainer}>
                    <View style={styles.calendarHeader}>
                        <Ionicons name="calendar" size={20} color={AppColors.lavenderBlue} />
                        <Text style={styles.calendarTitle}>July 2024</Text>
                    </View>
                    <FlatList
                        data={weekDates}
                        keyExtractor={(item) => item.toISOString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            const { day, weekday } = formatDate(item);
                            const isSelected = item.toDateString() === selectedDate;
                            return (
                                <TouchableOpacity
                                    onPress={() => handleDatePress(item)}
                                    style={[styles.day, isSelected && styles.selectedDay]}
                                >
                                    <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>{day}</Text>
                                    <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>{weekday}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>

                <View style={styles.tasksContainer}>
                    <FlatList
                        data={tasks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <View style={[styles.task, index === tasks.length - 1 && styles.lastTask]}>
                                <Image source={item.image} style={styles.taskImage} />
                                <View style={styles.taskTextContainer}>
                                    <Text style={styles.taskTime}>{item.time}</Text>
                                    <Text style={styles.taskTitle}>{item.title}</Text>
                                    <Text style={styles.taskSubtitle}>{item.subtitle}</Text>
                                </View>
                                {item.time && (
                                    <Ionicons name={item.time === 'N/A' ? 'document' : item.time === '7:00 PM' ? 'flask' : 'checkmark-circle'} size={24} color="#8ed5d7" style={styles.taskIcon} />
                                )}
                            </View>
                        )}
                    />
                </View>

                <InfoContainer cards={cards} />

                <View style={styles.chatContainer}>
                    <View style={styles.chatHeader}>
                        <Text style={styles.chatTitle}>How do you feel today? Write Something</Text>
                    </View>
                </View>

                <View style={styles.emotionContainer}>
                    <View style={styles.emotionIconsContainer}>
                        {EMOTIONS.map((emotion, index) => (
                            <View key={index} style={styles.emotionIconWrapper}>
                                <Image source={emotion.image} style={styles.emotionIcon} />
                                <Text style={styles.emotionLabel}>{emotion.label}</Text>
                            </View>
                        ))}
                    </View>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={4}
                        step={1}
                        value={selectedEmotion}
                        onValueChange={handleSliderChange}
                        minimumTrackTintColor={EMOTIONS[selectedEmotion].color}
                        thumbTintColor={EMOTIONS[selectedEmotion].color}
                    />
                    <View style={styles.emotionDescription}>
                        <Text style={styles.emotionText}>{EMOTIONS[selectedEmotion].label}</Text>
                        <Text style={styles.desc}>Qaisl Tafa Fassan v Create a text. Create a text. Create a text. Create a text. Create a text This is the storyQaisl Tafa Fassan v Create a text. Create a text. Create a text. Create a text. Create a text This is the story</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop:20,
    },
    header: {
        backgroundColor: AppColors.downy,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerText: {
        color: AppColors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    menuIcon: {
        padding: 5,
    },
    profileIcon: {
        padding: 5,
    },
    welcomeContainer: {
        backgroundColor: AppColors.downy,
        padding: 20,
        alignItems: 'center',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    welcomeText: {
        color: AppColors.white,
        fontSize: 26,
        fontWeight: 'bold'
    },
    contentContainer: {
        paddingHorizontal: 20,
    },
    stageContainer: {
        backgroundColor: AppColors.white,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 0,
    },
    image: {
        marginTop:10,
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    stageTitle: {
        fontSize: 20,
        color: AppColors.lavenderBlue,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    stageSteps: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    step: {
        backgroundColor: AppColors.downyCircle,
        height:70,
        width:70,
        borderRadius:35,
        alignItems: 'center',
    },
    step1: {
        backgroundColor: AppColors.white,
        height: 70,
        width: 70,
        borderRadius: 35,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    stepText: {
        color: AppColors.grey,
        marginTop: 25,
    },
    stepTextActive: {
        color: AppColors.downy,
        marginTop: 25,
    },
    calendarContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 0,
    },
    calendarHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    calendarTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: AppColors.lavenderBlue,
        marginLeft: 5,
    },
    day: {
        alignItems: 'center',
        padding: 20,
        marginRight: 15,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: '#8ed5d7',
        backgroundColor: AppColors.white,
    },
    selectedDay: {
        backgroundColor: AppColors.downy,
        borderColor: AppColors.downy,
    },
    selectedDayText: {
        color: '#fff',
    },
    dayText: {
        color: AppColors.grey,
        fontSize: 18,
        fontWeight: 'bold'
    },
    tasksContainer: {
        backgroundColor: AppColors.white,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 3,
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: AppColors.downy,
        paddingBottom: 10,
    },
    lastTask: {
        borderBottomWidth: 0,
    },
    taskImage: {
        width: 40,
        height: 40,
        marginRight:15,
    },
    taskIcon: {
        marginLeft: 10,
    },
    taskTextContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    taskTitle: {
        fontWeight: 'bold',
        color: AppColors.grey,
        fontSize: 18,
    },
    taskSubtitle: {
        color: AppColors.lightGrey,
        fontSize: 14,
    },
    taskTime: {
        color: AppColors.grey,
        fontWeight:'500',
        marginBottom: 5,
    },
    chatContainer: {
        backgroundColor: AppColors.white,
        borderRadius: 10,
        marginVertical: 10,
    },
    chatHeader: {
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'space-between',
    },
    chatTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: AppColors.grey,
    },
    chatMessageContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        borderColor: '#8ed5d7',
        borderWidth: 2,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    chatUserInfo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    chatUsername: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
    },
    chatTime: {
        fontSize: 14,
        color: '#999',
    },
    messageTitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: AppColors.grey,
    },
    chatMessage: {
        fontSize: 16,
        color: AppColors.grey,
        lineHeight: 24,
        flex: 1,
    },
    emotionContainer: {
        borderWidth: 1,
        borderColor: AppColors.downy,
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        marginBottom:20,
    },
    emotionIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    emotionIconWrapper: {
        alignItems: 'center',
    },
    emotionIcon: {
        width: 40,
        height: 40,
    },
    emotionLabel: {
        marginTop: 5,
        fontSize: 14,
        color: AppColors.grey,
    },
    slider: {
        marginVertical: 20,
    },
    emotionDescription: {
        alignItems: 'left',
    },
    emotionText: {
        fontSize: 18,
        color: AppColors.downy,
        fontWeight: 'bold',
    },
    desc:{
        fontSize: 14,
        color: AppColors.lightGrey,
        fontWeight: 'bold',
    },
});
