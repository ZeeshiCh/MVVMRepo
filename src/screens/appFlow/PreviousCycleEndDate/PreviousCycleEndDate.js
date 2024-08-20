import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import Button from "../../../components/Button/Button";
import AppColors from "../../../utils/AppColors/AppColors";
import ScreenNames from "../../../navigation/ScreenNames";
import NavigationService from "../../../navigation/NavigationService";

const PreviousCycleEndDate = () => {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(null);

    const handlePress = () => {
        NavigationService.navigate(ScreenNames.CourseTreatmentType);
    };

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Choose the End date for that course</Text>
            <View style={styles.calendarContainer}>
                <Calendar
                    onDayPress={onDayPress}
                    markedDates={{
                        [selectedDate]: {
                            selected: true,
                            selectedColor: AppColors.lavenderBlue,
                        },
                    }}
                    theme={{
                        calendarBackground: 'white',
                        textSectionTitleColor: AppColors.grey,
                        selectedDayBackgroundColor: AppColors.lavenderBlue,
                        selectedDayTextColor: 'white',
                        todayTextColor: AppColors.downy,
                        dayTextColor: AppColors.grey,
                        textDisabledColor: AppColors.lightGrey,
                        arrowColor: AppColors.lavenderBlue,
                        monthTextColor: AppColors.grey,
                        indicatorColor: AppColors.lavenderBlue,
                    }}
                />
            </View>
            <Button
                title="I Am Ready!"
                backgroundColor={AppColors.downy}
                textColor="white"
                onPress={handlePress}
            />
        </View>
    );
};

export default PreviousCycleEndDate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    headerText: {
        fontSize: 30,
        color: AppColors.lightGrey,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    calendarContainer: {
        width: '100%',
        backgroundColor: AppColors.white,
        borderRadius: 20,
        elevation: 3,
        marginBottom: 40,
    },
});
