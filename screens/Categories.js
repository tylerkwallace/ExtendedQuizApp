import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Title from "../components/Title";


const Categories = ({ navigation }) => {
    const handleSelectedCategory = (_option) => {
        if(_option==='Music'){
            url = ('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple&encode=url3986')
        }
        if(_option==='Science & Nature'){
            url = ('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple&encode=url3986')
        }
        if(_option==='Sports'){
            url = ('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple&encode=url3986')
        }
        if(_option==='History'){
            url = ('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple&encode=url3986')
        }
        navigation.navigate('Quiz', {
            url: url
        })
    }

    return (
        <View style={styles.container}>
            <Title titleText='Categories' />
            <Text>Choose a category!</Text>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedCategory('Music')}>
                    <Text style={styles.option}>Music</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedCategory('Science & Nature')}>
                    <Text style={styles.option}>Science & Nature</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedCategory('Sports')}>
                    <Text style={styles.option}>Sports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedCategory('History')}>
                    <Text style={styles.option}>History</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    button: {
        width: '100%',
        backgroundColor: '#0E1D6A',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#6A040F',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    

});