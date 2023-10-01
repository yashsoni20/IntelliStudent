import React, { useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const FeatureComparisonModal = ({ visible, onClose}) => {
    const navigation = useNavigation();
    const handleCheckout = () => {
        onClose(); 
        navigation.navigate('Checkout');
    };
    const [selectedPlan, setSelectedPlan] = useState('premium');

    const premiumFeatures = [
        { name: 'Quick Response', premium: true },
        { name: 'Limited Questions', premium: true },
        { name: 'Lesson Video Stream', premium: true },
        { name: 'Resources', premium: true },
        { name: 'Special Course', premium: false },
        { name: 'Live Insight', premium: true },
        { name: 'Class Downloads', premium: true },
        { name: 'AI Tutor', premium: true },
        // Add more premium features as needed
    ];

    const standardFeatures = [
        { name: 'Quick Response', standard: false },
        { name: 'Limited Questions', standard: false },
        { name: 'Lesson Video Stream', standard: true },
        { name: 'Resources', standard: false },
        { name: 'Special Course', standard: false },
        { name: 'Live Insight', standard: true },
        { name: 'Class Downloads', standard: true },
        { name: 'AI Tutor', standard: true },

    ];
    const ultraFeatures = [
        { name: 'Quick Response', ultra: false },
        { name: 'Limited Questions', ultra: false },
        { name: 'Lesson Video Stream', ultra: true },
        { name: 'Resources', ultra: true },
        { name: 'Special Course', ultra: false },
        { name: 'Live Insight', ultra: true },
        { name: 'Class Downloads', ultra: true },
        { name: 'AI Tutor', ultra: true },
        // Add more premium features as needed
    ];

    const renderPFeatures = premiumFeatures;
    const renderSFeatures = standardFeatures;
    const renderUFeatures = ultraFeatures;

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Feature Comparison</Text>
                    <ScrollView horizontal>

                        <View style={styles.planHeader}>
                            <View style={{ width: '30%', padding: 10 }}>
                                <Text style={styles.planHeaderText}>Plans</Text>
                                {renderPFeatures.map((feature, index) => (
                                    <View key={index} style={styles.tableRow}>
                                        <Text style={{ fontSize: 12 }}>{feature.name}</Text>
                                        {/* 
                                    <View style={styles.iconColumn}>
                                        <Icon
                                            name={feature.premium ? 'checkmark-circle' : 'close-circle'}
                                            size={20}
                                            color={feature.premium ? 'green' : 'red'}
                                        />
                                    </View> */}
                                    </View>
                                ))}
                            </View>
                            <TouchableOpacity
                                onPress={() => setSelectedPlan('premium')}
                                style={[
                                    styles.planContainer,
                                    selectedPlan === 'premium' && styles.selectedPlanContainer,
                                ]}>
                                {/* <Text style={styles.featureName}>{feature.name}</Text> */}
                                <Text
                                    style={[
                                        styles.planHeaderText,
                                        selectedPlan === 'premium' && styles.selectedPlanText,
                                    ]}
                                >
                                    Premium
                                </Text>
                                {renderPFeatures.map((feature, index) => (
                                    <View key={index} style={styles.tableRow}>

                                        <View style={styles.iconColumn}>
                                            <Icon
                                                name={feature.premium ? 'checkmark-circle' : 'close-circle'}
                                                size={20}
                                                color={feature.premium ? 'green' : 'red'}
                                            />
                                        </View>
                                    </View>
                                ))}
                            </TouchableOpacity>
                            {/* <Text style={styles.planHeaderText}>Features</Text> */}

                            <TouchableOpacity
                                onPress={() => setSelectedPlan('standard')} style={[
                                    styles.planContainer,
                                    selectedPlan === 'standard' && styles.selectedPlanContainer,
                                ]}>
                                <Text
                                    style={[
                                        styles.planHeaderText,
                                        selectedPlan === 'standard' && styles.selectedPlanText,
                                    ]}
                                >
                                    Standard
                                </Text>
                                {renderSFeatures.map((feature, index) => (
                                    <View key={index} style={styles.tableRow}>

                                        <View style={styles.iconColumn}>
                                            <Icon
                                                name={feature.standard ? 'checkmark-circle' : 'close-circle'}
                                                size={20}
                                                color={feature.standard ? 'green' : 'red'}
                                            />
                                        </View>
                                    </View>
                                ))}
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setSelectedPlan('ultra')}
                                style={[
                                    styles.planContainer,
                                    selectedPlan === 'ultra' && styles.selectedPlanContainer,
                                ]}>
                                <Text
                                    style={[
                                        styles.planHeaderText,
                                        selectedPlan === 'ultra' && styles.selectedPlanText,
                                    ]}
                                >
                                    Ultra
                                </Text>
                                {renderUFeatures.map((feature, index) => (
                                    <View key={index} style={styles.tableRow}>

                                        <View style={styles.iconColumn}>
                                            <Icon
                                                name={feature.ultra ? 'checkmark-circle' : 'close-circle'}
                                                size={20}
                                                color={feature.ultra ? 'green' : 'red'}
                                            />
                                        </View>
                                    </View>
                                ))}
                            </TouchableOpacity>

                        </View>
                    </ScrollView>


                    {/* Plan Selection and Close Button */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={handleCheckout} style={styles.primaryBtn}>
                            <Text style={{color:'white',textTransform:'capitalize',fontSize:16,fontWeight:'bold'}}>{selectedPlan} 999 Rs/ Anually</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.primaryBckBtn} onPress={onClose}>
                            <Text style={{color:'#6B4EFF',fontSize:16}}>Back</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '95%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    planHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 10,
        marginBottom: 10,
    },
    planHeaderText: {
        fontWeight: 'bold',
        // textDecorationLine: 'underline',
        // textDecorationColor: 'green',
        marginBottom: 20
    },
    selectedPlanText: {
        fontWeight: 'bold',
        color: 'green',
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    featureName: {
        width: '70%',
    },
    iconColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    },
    planContainer: {
        width: '22%',
        // backgroundColor: 'red',
        padding: 5,
        alignItems: 'center'
    },

    selectedPlanContainer: {
        borderWidth: 1,
        padding: 3
    },
    primaryBtn: {
        backgroundColor: '#6B4EFF',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 14,
        textAlign: 'center',
        alignItems: 'center',
        marginVertical:10
    },
    primaryBckBtn: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 14,
        textAlign: 'center',
        alignItems: 'center',
        marginVertical:10,
        borderWidth:1,
        borderColor:'#6B4EFF'
    },
});

export default FeatureComparisonModal;
