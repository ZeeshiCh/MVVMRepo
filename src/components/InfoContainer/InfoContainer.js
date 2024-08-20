import React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import AppColors from "../../utils/AppColors/AppColors";

const InfoContainer = ({ cards = [] }) => {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Information for you</Text>
            <FlatList
                data={cards}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        paddingVertical: 20,
    },
    infoTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        color: AppColors.grey,
    },
    card: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        marginRight: 20,
        elevation: 2,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#8ed5d7',
        height: 250,
        width: 200,
    },
    cardImage: {
        width: 190,
        height: 150,
        marginBottom: 10,
        borderRadius: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: AppColors.grey,
        marginBottom: 5,
    },
    cardSubtitle: {
        fontSize: 12,
        color: AppColors.grey,
        textAlign: 'center',
    },
});

export default InfoContainer;
