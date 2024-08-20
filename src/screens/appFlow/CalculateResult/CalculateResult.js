import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import AppColors from "../../../utils/AppColors/AppColors";
import Header from "../../../components/Header/Header";

const { width } = Dimensions.get('window');

const ProgressCircle = ({ progress, size, color, label }) => {
    const radius = size / 2 - 10;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <View style={styles.progressWrapper}>

            <View style={styles.progressTextWrapper}>
                <Text style={styles.progressText}>{`${progress}%`}</Text>
            </View>
            <Text style={styles.progressLabel}>{label}</Text>
        </View>
    );
};

const CalculateResult = () => {
    const data = [55, 41, 26.8, 13.4, 4.3];
    const labels = ['<35', '35-37', '38-40', '41-42', '>42'];
    const cards = [
        { title: 'They read “Adsala Jalaa”.', subtitle: 'Rasṭḥam lākṣb, Jatnamla Saw, Jatnamla Saw', image: require('../../../assets/images/home8.png') },
        { title: 'They read “Adsala Jalaa”.', subtitle: 'Rasṭḥam lākṣb, Jatnamla Saw, Jatnamla Saw', image: require('../../../assets/images/home9.png') },
        { title: 'They read “Adsala Jalaa”.', subtitle: 'Rasṭḥam lākṣb, Jatnamla Saw, Jatnamla Saw', image: require('../../../assets/images/home10.png') },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header headerText="IVF Success Calculator" />

            <Text style={styles.header}>Your Search Results</Text>
            <View style={styles.progressContainer}>
                <ProgressCircle progress={70.2} size={80} color="#6a1b9a" label="With 1 IVF cycle" />
                <ProgressCircle progress={70.2} size={80} color="#4caf50" label="With 2 IVF cycles" />
                <ProgressCircle progress={70.2} size={80} color="#f44336" label="With 3 IVF cycles" />
            </View>

            <Text style={styles.sectionHeader}>Information For You</Text>
            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Average Live Birth Rate Per IVF Cycle</Text>
                <View style={styles.barChart}>
                    {data.map((value, index) => (
                        <View key={index} style={styles.barContainer}>
                            <View style={[styles.bar, { height: `${value}%` }]} />
                            <Text style={styles.barLabel}>{labels[index]}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.chartSubtitle}>Mother's age</Text>
            </View>

            <FlatList
                horizontal
                data={cards}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                    </View>
                )}
                contentContainerStyle={styles.cardsContainer}
            />

            <View style={styles.answersContainer}>
                <Text style={styles.answersHeader}>View Your Answers</Text>
                {[...Array(5)].map((_, index) => (
                    <View key={index} style={styles.answerRow}>
                        <Text style={styles.answerQuestion}>Questions</Text>
                        <Text style={styles.answer}>Answer</Text>
                    </View>
                ))}
                <TouchableOpacity style={styles.showMoreButton}>
                    <Text style={styles.showMoreText}>Show more</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: AppColors.white,
        paddingBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: AppColors.grey,
        marginVertical: 20,
        alignSelf: 'center',
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    progressWrapper: {
        alignItems: 'center',
    },
    progressLabel: {
        marginTop: 50,
        fontSize: 14,
        color: '#b0bec5',
    },
    progressTextWrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginHorizontal: 20,
        color: AppColors.lightGrey,
        marginBottom: 10,
    },
    chartContainer: {
        marginHorizontal: 20,
        backgroundColor: AppColors.white,
        borderRadius: 10,
        padding: 20,
        width: width * 0.9,
        elevation: 3,
        marginBottom: 20,
        alignItems: 'center',
    },
    chartTitle: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: AppColors.grey,
        marginBottom: 10,
    },
    barChart: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: 200,
        alignItems: 'flex-end',
    },
    barContainer: {
        alignItems: 'center',
    },
    bar: {
        width: 20,
        backgroundColor: AppColors.downy,
        borderRadius: 5,
    },
    barLabel: {
        fontSize: 14,
        color: '#b0bec5',
        marginTop: 5,
    },
    chartSubtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: AppColors.lavenderBlue,
        marginTop: 10,
    },
    cardsContainer: {
        paddingLeft: 20,
    },
    card: {
        backgroundColor: AppColors.white,
        borderRadius: 10,
        borderColor: AppColors.downy,
        borderWidth: 1,
        padding: 5,
        width: 150,
        height: 200,
        marginRight: 20,
        elevation: 3,
        marginBottom: 20,
    },
    cardImage: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: AppColors.black,
    },
    cardSubtitle: {
        fontSize: 14,
        color: AppColors.grey,
        textAlign: 'center',
    },
    answersContainer: {
        marginHorizontal: 20,
        backgroundColor: AppColors.white,
        borderRadius: 10,
        padding: 20,
        width: width * 0.9,
        elevation: 3,
        marginTop: 20,
    },
    answersHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppColors.grey,
        marginBottom: 10,
    },
    answerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: AppColors.downy,
        borderBottomWidth: 1,
    },
    answerQuestion: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppColors.downy,
    },
    answer: {
        fontSize: 18,
        color: AppColors.downy,
    },
    showMoreButton: {
        alignItems: 'center',
        marginTop: 10,
    },
    showMoreText: {
        fontSize: 16,
        color: AppColors.downy,
    },
});

export default CalculateResult;
