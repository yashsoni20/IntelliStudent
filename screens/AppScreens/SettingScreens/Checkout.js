import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react'

export default function Checkout() {
    const [selectedMethod, setSelectedMethod] = useState('Credit Card');

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
    };


    return (
        <View style={styles.container}>
            {/* Set the StatusBar to transparent */}
            <StatusBar translucent backgroundColor="transparent" />
            {/* Notifcation safe area */}
            <View style={{ backgroundColor: 'white', width: '100%', height: 35 }}></View>
            {/* Content */}
            <ScrollView contentContainerStyle={styles.MainWrap}>
                {/* Your scrollable content goes here */}
                <Text style={{ color: '#2A0087', fontWeight: '600', fontSize: 36 }}>Checkout</Text>

                <View style={{ marginVertical: 20 }}>
                    <Text style={{ fontWeight: '600', fontSize: 22 }}>Payment Details</Text>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ marginVertical: 10, fontWeight: '600', fontSize: 18 }}>Credit Cards & Details</Text>
                        <View style={styles.detailsContainer}>

                            <TouchableOpacity
                                style={[styles.navBtn, selectedMethod === 'card 1' && styles.selectedMethod,]}
                                onPress={() => handleMethodSelect('card 1')}
                            >
                                <View style={{ width: '80%', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                    <FontAwesome name={'cc-mastercard'} color={'black'} size={20} />
                                    <Text style={styles.secondTxt}>Axis Bank **** **** **** 1234</Text>
                                </View>
                                <View style={{ width: '20%', alignItems: 'flex-end' }}>
                                    {selectedMethod === 'card 1' ? (
                                        <View style={styles.radioSelectButton}>
                                            <View style={styles.radionSInner}></View>
                                        </View>
                                    ) : (<View style={styles.radioButton} />)}
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.navBtn, selectedMethod === 'card 2' && styles.selectedMethod,]}
                                onPress={() => handleMethodSelect('card 2')}
                            >
                                <View style={{ width: '80%', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                    <FontAwesome name={'cc-visa'} color={'black'} size={20} />
                                    <Text style={styles.secondTxt}>HDFC Bank **** **** **** 1234</Text>
                                </View>
                                <View style={{ width: '20%', alignItems: 'flex-end' }}>
                                    {selectedMethod === 'card 2' ? (
                                        <View style={styles.radioSelectButton}>
                                            <View style={styles.radionSInner}></View>
                                        </View>
                                    ) : (<View style={styles.radioButton} />)}
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <View style={{ backgroundColor: '#6B4EFF', borderRadius: 7, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesome5 name={'plus'} size={16} color={'white'} />
                                </View>
                                <Text>Add New Card</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ marginVertical: 10, fontWeight: '600', fontSize: 18 }}>UPI</Text>
                        <View style={styles.detailsContainer}>

                            <TouchableOpacity
                                style={[styles.navBtn, selectedMethod === 'gpay' && styles.selectedMethod,]}
                                onPress={() => handleMethodSelect('gpay')}
                            >
                                <View style={{ width: '80%', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                    <FontAwesome5 name={'google-pay'} color={'black'} size={20} />
                                    <Text style={styles.secondTxt}>Google Pay</Text>
                                </View>
                                <View style={{ width: '20%', alignItems: 'flex-end' }}>
                                    {selectedMethod === 'gpay' ? (
                                        <View style={styles.radioSelectButton}>
                                            <View style={styles.radionSInner}></View>
                                        </View>
                                    ) : (<View style={styles.radioButton} />)}
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.navBtn, selectedMethod === 'PhonePe' && styles.selectedMethod,]}
                                onPress={() => handleMethodSelect('PhonePe')}
                            >
                                <View style={{ width: '80%', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                    <FontAwesome5 name={'paypal'} color={'black'} size={20} />
                                    <Text style={styles.secondTxt}>Paypal</Text>
                                </View>
                                <View style={{ width: '20%', alignItems: 'flex-end' }}>
                                    {selectedMethod === 'PhonePe' ? (
                                        <View style={styles.radioSelectButton}>
                                            <View style={styles.radionSInner}></View>
                                        </View>
                                    ) : (<View style={styles.radioButton} />)}
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.navBtn, selectedMethod === 'NetBank' && styles.selectedMethod,]}
                                onPress={() => handleMethodSelect('NetBank')}
                            >
                                <View style={{ width: '80%', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                    <FontAwesome name={'bank'} color={'black'} size={20} />
                                    <Text style={styles.secondTxt}>Net Banking</Text>
                                </View>
                                <View style={{ width: '20%', alignItems: 'flex-end' }}>
                                    {selectedMethod === 'NetBank' ? (
                                        <View style={styles.radioSelectButton}>
                                            <View style={styles.radionSInner}></View>
                                        </View>
                                    ) : (<View style={styles.radioButton} />)}
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <View style={{ backgroundColor: '#6B4EFF', borderRadius: 7, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesome5 name={'plus'} size={16} color={'white'} />
                                </View>
                                <Text>Add New UPI</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.detailsContainer}>
                        <TouchableOpacity
                            style={[styles.navBtn,{borderWidth:0,paddingVertical:0,paddingHorizontal:0,marginBottom:0}]}
                            onPress={() => handlePaymentHistory('PaymentHistory')}
                        >
                            <View style={{ width: '80%', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Text style={styles.secondTxt}>Payment History</Text>
                            </View>
                            <View style={{ width: '20%', alignItems: 'flex-end' }}>
                                <Ionicons name={'chevron-forward-outline'} size={20} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginVertical:20,backgroundColor:'lightblue',height:10      }}>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: 100
    },
    MainWrap: {
        padding: 16,
    },

    HeadTxt: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    secondTxt: {
        fontSize: 12,
        fontWeight: '400',
    },
    navBtn: {
        flexDirection: 'row',
        marginBottom: 15,
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10
    },
    detailsContainer: {
        width: '100%',
        // height: 60,
        backgroundColor: 'white',
        borderRadius: 12,
        marginVertical: 8,
        elevation: 4, // Android shadow
        shadowColor: 'black', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        padding: 15
    },

    radioSelectButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#6B4EFF', // Color when selected
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    radionSInner: {
        width: 10,
        height: 10,
        backgroundColor: '#6B4EFF',
        borderRadius: 20
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#6B4EFF', // Color when selected
    },
})