import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import AppColors from "../../utils/AppColors/AppColors";
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../../navigation/ScreenNames";
import NavigationService from "../../navigation/NavigationService";

import infoIcon from '../../assets/images/modal1.png';
import period from '../../assets/images/modal2.png';
import stimulation from '../../assets/images/modal3.png';
import triggering from '../../assets/images/modal4.png';
import retrival from '../../assets/images/modal5.png';
import embyroTransfer from '../../assets/images/modal6.png';
import pregnancyTest from '../../assets/images/modal7.png';
import symptoms from '../../assets/images/modal8.png';
import appointments from '../../assets/images/modal9.png';
import notes from '../../assets/images/modal10.png';

const PlusModal = ({ visible, onClose }) => {
    const navigation = useNavigation();

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.modalItem} onPress={() => NavigationService.navigate(ScreenNames.InformationScreen)}>
                        <Text style={styles.modalItemText}>Information</Text>
                        <Image source={infoIcon} style={styles.modalItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalItem} onPress={() => NavigationService.navigate(ScreenNames.StartPeriodScreen)}>
                        <Text style={styles.modalItemText}>Start Period</Text>
                        <Image source={period} style={styles.modalItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalItem} onPress={() => NavigationService.navigate(ScreenNames.StimulationScreen)}>
                        <Text style={styles.modalItemText}>Stimulation</Text>
                        <Image source={stimulation} style={styles.modalItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalItem} onPress={() => NavigationService.navigate(ScreenNames.TriggeringScreen)}>
                        <Text style={styles.modalItemText}>Triggering</Text>
                        <Image source={triggering} style={styles.modalItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalItem} onPress={() => NavigationService.navigate(ScreenNames.RetrivalScreen)}>
                        <Text style={styles.modalItemText}>Retrieval</Text>
                        <Image source={retrival} style={styles.modalItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalItem} onPress={() => NavigationService.navigate(ScreenNames.EmbyroTransfer)}>
                        <Text style={styles.modalItemText}>Embryo Transfer</Text>
                        <Image source={embyroTransfer} style={styles.modalItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalItem} onPress={() => NavigationService.navigate(ScreenNames.PregnancyTestScreen)}>
                        <Text style={styles.modalItemText}>Pregnancy Test</Text>
                        <Image source={pregnancyTest} style={styles.modalItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalItem} onPress={() => NavigationService.navigate(ScreenNames.SymptomsScreen)}>
                        <Text style={styles.modalItemText}>Symptoms</Text>
                        <Image source={symptoms} style={styles.modalItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalItem} onPress={() => NavigationService.navigate(ScreenNames.AppointmentsScreen)}>
                        <Text style={styles.modalItemText}>Appointments</Text>
                        <Image source={appointments} style={styles.modalItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalItem} onPress={() => NavigationService.navigate(ScreenNames.AddNoteScreen)}>
                        <Text style={styles.modalItemText}>Notes</Text>
                        <Image source={notes} style={styles.modalItemIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    modalContent: {
        backgroundColor: AppColors.white_85,
        padding: 20,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    modalItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        alignSelf: 'flex-end',
    },
    modalItemIcon: {
        width: 50,
        height: 50,
        marginLeft: 15,
        resizeMode: 'contain',
    },
    modalItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppColors.black,
        textAlign: 'right',
    },
});

export default PlusModal;
