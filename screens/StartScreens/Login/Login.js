// OnboardingScreen1.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CheckBox from 'react-native-check-box';

const Login = ({ navigation }) => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckBox1Change = () => {
        setIsChecked1(!isChecked1);
    };

    const handleCheckBox2Change = () => {
        setIsChecked2(!isChecked2);
    };

    const isButtonEnabled = isChecked1 && isChecked2;

    const handleTouchableOpacityPress = () => {
        if (isButtonEnabled) {
            navigation.navigate('Otp')
        }
    };
    return (

        // Main App Screen Dimentsions
        <View style={styles.MainWrap}>
            <StatusBar barStyle="dark-content" />

            {/* View For Logo and Bannner */}
            <View style={{ marginTop: 80 }}>

                {/* View For Banner Image */}
                <View style={{ alignItems: 'center' }}>
                    {/* View For Text */}
                    <View style={{ alignItems: 'center', width: 260, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#2A0087', lineHeight: 40, textAlign: 'center', marginBottom: 10 }}>Embark</Text>
                        <Text style={{ fontSize: 20, fontWeight: '400', color: '#8E8E8E', lineHeight: 25, textAlign: 'center' }}>On A Learning Odyssey</Text>
                    </View>
                    <Image source={require('../../../assets/Start/Bag.png')} />
                </View>
            </View>

            {/* View For Get Started And Buttons */}
            <LinearGradient
                // Background Linear Gradient
                colors={['#6B4EFF', '#9682EC']}
                style={styles.background}
            >
                <Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: '500', marginBottom: 20 }}>Login Or Signup</Text>
                {/* <CountryDropdown /> */}

                <View>
                    <View
                        style={[styles.input, { flexDirection: 'row' ,width:'100%'}]}
                    >
                        <Text style={{width:"15%",color:"#2A0087"}}>+91</Text>
                        <TextInput
                            placeholderTextColor={'#8E8E8E'}
                            // keyboardType='numeric'
                            placeholder='Mobile Number'
                        // style={styles.input}
                        />

                    </View>
                    

                    <TouchableOpacity
                        // onPress={() => navigation.navigate('Onboarding2')}
                        style={[styles.PrimaryBtnDark, isButtonEnabled ? styles.enabledButton : styles.disabledButton]}
                        onPress={handleTouchableOpacityPress}
                        disabled={!isButtonEnabled}
                    >
                        <Text style={{ fontSize: 16, color: '#FFFFFF' }}>Continue</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity onPress={handleCheckBox1Change} style={{ flexDirection: 'row', marginTop: 30, gap: 10 }}>
                            <CheckBox
                                checkBoxColor='#FFFFFF'
                                onClick={handleCheckBox1Change}
                                isChecked={isChecked1}
                            />
                            <Text style={{ color: '#FFFFFF', marginTop: 4 }}>Send notification to Whatsapp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleCheckBox2Change} style={{ flexDirection: 'row', marginTop: 20, gap: 10 }}>
                            <CheckBox
                                checkBoxColor='#FFFFFF'
                                onClick={handleCheckBox2Change}
                                isChecked={isChecked2}
                            />
                            <Text style={{ color: '#FFFFFF', marginTop: 4 }}>Accept terms & policies</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    MainWrap: {
        width: '100%',
        height: '100%'
    },
    background: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderRadius: 48,
        padding: 50,
        // alignItems: 'center'
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 22,
        borderRadius: 20,
        marginBottom: 20,
        marginTop: 10,
    },
    PrimaryBtnDark: {
        width: '100%',
        backgroundColor: '#2A0087',
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderRadius: 20,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#441fa6', // Change to your desired disabled button color
      },
});

export default Login;
