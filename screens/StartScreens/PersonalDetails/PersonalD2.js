import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function PersonalD2({ navigation }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const options = ['Linkedin', 'Instagram', 'Whatsapp', 'Friends', 'Facebook', 'Others'];

    const [selectedGoal, setSelectedGoal] = useState(null);


    const expOptions = [
        { id: 'beginner', text: 'Beginner', description: 'Start your journey from scratch.' },
        { id: 'intermediate', text: 'Intermediate', description: 'Answer a few questions to find your experience.' },
    ];

    // Define an array of subjects
    const subjects = ['Mathematics', 'Physics', 'Chemistry','Social Science']; // Add more subjects as needed

    // Create a state object to track experience options for each subject
    const [subjectExpOptions, setSubjectExpOptions] = useState({});

    // Function to handle selecting an experience option for a subject
    const handleExpOptionSelect = (subject, optionId) => {
        setSubjectExpOptions({
            ...subjectExpOptions,
            [subject]: optionId,
        });
    };

    const handleGoalSelect = (quality) => {
        setSelectedGoal(quality);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const selectItem = (item) => {
        setSelectedItem(item);
        setDropdownOpen(false);
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.MainWrap}>
                <StatusBar barStyle="dark-content" />

                <View style={{ marginTop: 60, width: '90%', alignSelf: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={{ margin: 10 }}
                    >
                        <Icon name="chevron-left" size={26} color={'#2A0087'} />
                    </TouchableOpacity>

                    <View style={{ marginTop: 40, padding: 20 }}>
                        <View>
                            <Text style={styles.headerText}>
                                Personalize
                            </Text>
                            <Text style={{ color: '#6B4EFF', fontSize: 24, fontWeight: '400' }}>
                                Your Experience
                            </Text>
                        </View>

                        <View style={{ width: '100%', marginTop: 30 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 16 }}>How did you hear?</Text>
                            <View>
                                <TouchableOpacity onPress={toggleDropdown} style={{ padding: 10, borderWidth: 1, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text>{selectedItem || 'Select Platform'}</Text>
                                    <Icon name={dropdownOpen ? 'chevron-up' : 'chevron-down'} size={14} color="black" />
                                </TouchableOpacity>
                                {dropdownOpen && (
                                    <ScrollView style={styles.dropdownOptions}>
                                        {options.map((item) => (
                                            <TouchableOpacity
                                                key={item}
                                                onPress={() => selectItem(item)}
                                                style={styles.dropdownOption}
                                            >
                                                <Text>{item}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </ScrollView>
                                )}
                            </View>
                        </View>
                        <View style={{ width: '100%', marginTop: 30 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 16 }}>Your learning goal?</Text>
                            <View style={{ width: '100%', flexDirection: 'row', gap: 10, }}>
                                <TouchableOpacity
                                    style={[
                                        styles.optionButton,
                                        selectedGoal === 'Daily' ? styles.selectedOption : null,
                                    ]}
                                    onPress={() => handleGoalSelect('Daily')}
                                >
                                    <Text style={{ textAlign: 'center', color: selectedGoal === 'Daily' ? 'white' : 'black' }}>Daily</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.optionButton,
                                        selectedGoal === 'Weekly' ? styles.selectedOption : null,
                                    ]}
                                    onPress={() => handleGoalSelect('Weekly')}
                                >
                                    <Text style={{ textAlign: 'center', color: selectedGoal === 'Weekly' ? 'white' : 'black' }}>Weekly</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '100%', marginTop: 60 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>What's your learning experience ?</Text>
                            {subjects.map((subject) => (

                                <View  key={subject}>
                                    <Text style={styles.subjectExp}>{subject}</Text>

                                    <View style={{ width: '100%', flexDirection: 'row', gap: 10 }}>
                                        {expOptions.map((expOption) => (
                                            <TouchableOpacity
                                                key={expOption.id}
                                                style={[
                                                    styles.expButton,
                                                    subjectExpOptions[subject] === expOption.id ? styles.selectedOption : null,
                                                ]}
                                                onPress={() => handleExpOptionSelect(subject, expOption.id)}
                                            >
                                                <Text style={[styles.expBtnHead, subjectExpOptions[subject] === expOption.id ? styles.selectedExpHeadOption : null]}>{expOption.text}</Text>
                                                <Text style={styles.expBtnPara}>{expOption.description}</Text>
                                                {subjectExpOptions[subject] === expOption.id && (
                                                    <View style={styles.selectedIconContainer}>
                                                        <Icon name={'check'} size={12} color={'#2A0087'} />
                                                    </View>
                                                )}
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            ))}

                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.SecondaryBtn}
                        onPress={() => navigation.navigate('MainTabNavigator')}
                    >
                        <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    MainWrap: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 36,
        color: '#2A0087',
        fontWeight: '500',
        width: 200,
        marginBottom: 10,
    },
    dropdownOptions: {
        maxHeight: 150,
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    dropdownOption: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    SecondaryBtn: {
        backgroundColor: '#6B4EFF',
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderRadius: 24,
        textAlign: 'center',
        alignItems: 'center',
        margin: 25,
        marginBottom: 40,
    },
    optionButton: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
    selectedOption: {
        backgroundColor: '#2A0087',
    },

    subjectExp: {
        color: '#6B4EFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 25,
    },
    expButton: {
        flex: 1,
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
    },
    expBtnHead: {
        color: '#0A0087',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    selectedExpHeadOption: {
        color: 'orange',
    },
    expBtnPara: {
        fontSize: 10,
        color: '#8E8E8E',
    },
    selectedIconContainer: {
        position: 'absolute',
        top: 7,
        right: 7,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 50,
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PersonalD2;
