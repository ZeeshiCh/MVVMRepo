import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AppColors from "../../utils/AppColors/AppColors";

const DetailsItem = ({ title, subtitle, image }) => {
    return (
        <TouchableOpacity style={styles.detailsItem}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.detailsTitle}>{title}</Text>
                <Text style={styles.detailsSubtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    detailsItem: {
        backgroundColor: AppColors.white,
        padding: 20,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        marginRight: 15,
    },
    image: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
    },
    detailsTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: AppColors.lavenderBlue,
    },
    detailsSubtitle: {
        fontSize: 18,
        fontWeight: '500',
        color: AppColors.lightLavenderBlue,
    },
});

export default DetailsItem;
