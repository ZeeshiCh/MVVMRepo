import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Header from "../../../components/Header/Header";
import AppColors from "../../../utils/AppColors/AppColors";
import { useNavigation } from '@react-navigation/native';
import DetailsItem from "../../../components/CalenderItems/DetailItem";
import PlusModal from "../../../models/PlusModal";

// Import images from assets
import period from '../../../assets/images/period.png';
import stimulation from '../../../assets/images/stimulation.png';
import triggering from '../../../assets/images/triggering.png';
import retrival from '../../../assets/images/retrival.png';
import embyroTransfer from '../../../assets/images/embyrotransfer.png';
import pregnancyTest from '../../../assets/images/pregnancytest.png';
import symptoms from '../../../assets/images/symptoms.png';
import appointments from '../../../assets/images/appointments.png';
import plusIcon from '../../../assets/images/add.png';
import notes from '../../../assets/images/notes.png';

const { width } = Dimensions.get('window');

export default function CalendarScreen() {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState('');
    const [markedDates, setMarkedDates] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const today = moment().format('YYYY-MM-DD');
        const periodStart = '2024-06-27';
        const periodEnd = '2024-07-02';

        let periodDates = {};
        for (let m = moment(periodStart); m.isSameOrBefore(periodEnd); m.add(1, 'days')) {
            periodDates[m.format('YYYY-MM-DD')] = {
                color: '#ffcccc',
                textColor: 'black',
            };
        }

        const fertileStart = '2024-07-10';
        const fertileEnd = '2024-07-14';

        let fertileDates = {};
        for (let m = moment(fertileStart); m.isSameOrBefore(fertileEnd); m.add(1, 'days')) {
            fertileDates[m.format('YYYY-MM-DD')] = {
                color: '#d1e7dd',
                textColor: 'black',
            };
        }

        const ovulationDates = {
            '2024-07-29': { dotColor: '#ff0000', activeOpacity: 0 },
            '2024-07-30': { dotColor: '#ff0000', activeOpacity: 0 },
            '2024-07-31': { dotColor: '#ff0000', activeOpacity: 0 },
        };

        setMarkedDates({
            ...periodDates,
            ...fertileDates,
            ...ovulationDates,
            [today]: { selected: true, marked: true, selectedColor: '#00adf5' },
        });
    }, []);

    const handlePlusButtonPress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header headerText="Your Calendar" />
                <Calendar
                    style={styles.calendar}
                    current={moment().format('YYYY-MM-DD')}
                    markedDates={markedDates}
                    markingType={'period'}
                    onDayPress={(day) => {
                        setSelectedDate(day.dateString);
                        setMarkedDates({
                            ...markedDates,
                            [day.dateString]: {
                                selected: true,
                                marked: true,
                                selectedColor: '#00adf5',
                            },
                        });
                    }}
                />
                {selectedDate ? (
                    <View style={styles.selectedDateContainer}>
                        <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
                    </View>
                ) : null}
                <View style={styles.legendContainer}>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: AppColors.lightCherryBlossom, borderRadius: 20 }]}></View>
                        <Text style={styles.legendText}>Start Period</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: AppColors.downy, borderRadius: 20 }]}></View>
                        <Text style={styles.legendText}>Stimulation</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: AppColors.downyCircle, borderRadius: 20 }]}></View>
                        <Text style={styles.legendText}>Triggering</Text>
                    </View>
                </View>
                <View style={styles.legendContainer}>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColor, { borderColor: AppColors.lavenderBlue, borderWidth: 1, borderRadius: 20 }]}></View>
                        <Text style={styles.legendText}>Retrieval</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: AppColors.lavenderBlue, borderRadius: 20 }]}></View>
                        <Text style={styles.legendText}>Embryo Transfer</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColor, { borderColor: AppColors.cherryBlossom, borderWidth: 1, borderRadius: 20 }]}></View>
                        <Text style={styles.legendText}>Pregnancy Test</Text>
                    </View>
                </View>
                <Text style={styles.welcomeText}>Treatment course for IVF</Text>
                <View style={styles.detailsContainer}>
                    <DetailsItem title="Start of Periods" subtitle="18 days ago" image={period} />
                    <DetailsItem title="Stimulation" subtitle="18 days ago" image={stimulation} />
                    <DetailsItem title="Triggering" subtitle="18 days ago" image={triggering} />
                    <DetailsItem title="Retrieval" subtitle="18 days ago" image={retrival} />
                    <DetailsItem title="Embryo Transfer" subtitle="18 days ago" image={embyroTransfer} />
                    <DetailsItem title="Pregnancy test day" subtitle="natural" image={pregnancyTest} />
                    <DetailsItem title="Symptoms" subtitle="natural, natural, natural" image={symptoms} />
                    <DetailsItem title="Appointments" subtitle="Today, 6pm, Clinic Name" image={appointments} />
                    <View style={styles.noteContainer}>
                        <View style={styles.noteHeader}>
                            <Image source={notes} style={styles.noteImage} />
                            <Text style={styles.noteTitle}>Notes</Text>
                        </View>
                        <Text style={styles.noteText}>
                            Your period will likely start on or around July 29. When your period begins, your menstrual period begins. Your period will likely start on or around July 29. When your period begins, your menstrual period begins. Start on or around July 29. When your period begins, start on or around July.
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.plusButton} onPress={handlePlusButtonPress}>
                <Image source={plusIcon} style={styles.plusIcon} />
            </TouchableOpacity>

            <PlusModal visible={modalVisible} onClose={closeModal} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: 20,
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
    },
    welcomeText: {
        paddingTop: 40,
        paddingLeft: 15,
        color: AppColors.grey,
        fontSize: 26,
        fontWeight: '700',
        alignSelf: 'flex-start',
    },
    calendar: {
        width: width,
        marginBottom: 10,
    },
    selectedDateContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#e9ecef',
        borderRadius: 5,
    },
    selectedDateText: {
        fontSize: 16,
    },
    legendContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around',
        width: '100%',
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendColor: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    legendText: {
        fontSize: 14,
    },
    detailsContainer: {
        marginTop: 5,
        width: '100%',
        padding: 10,
        backgroundColor: AppColors.white,
        borderRadius: 10,
    },
    noteContainer: {
        backgroundColor: AppColors.white,
        padding: 20,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 1,
        alignItems: 'flex-start',
    },
    noteHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    noteImage: {
        width: 28,
        height: 28,
        marginRight: 15,
    },
    noteTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: AppColors.lavenderBlue,
    },
    noteText: {
        fontSize: 18,
        color: AppColors.lightGrey,
    },
    plusButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: AppColors.lavenderBlue,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        zIndex: 1000,
    },
    plusIcon: {
        width: 30,
        height: 30,
    },
});
