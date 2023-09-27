import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  Button,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OTPScreen = ({ navigation }) => {
  const [otp1, setOTP1] = useState('');
  const [otp2, setOTP2] = useState('');
  const [otp3, setOTP3] = useState('');
  const [otp4, setOTP4] = useState('');
  const otpInput2Ref = useRef(null);
  const otpInput3Ref = useRef(null);
  const otpInput4Ref = useRef(null);

  const handleOTPSubmit = () => {
    const enteredOTP = otp1 + otp2 + otp3 + otp4;
    if (enteredOTP === '1234') {
      Keyboard.dismiss();
      navigation.navigate('PersonalD1');
    } else {
      navigation.navigate('MainTabNavigator');
    }
  };

  const focusNextInput = (refName) => {
    if (refName === 'otp2') {
      otpInput2Ref.current.focus();
    } else if (refName === 'otp3') {
      otpInput3Ref.current.focus();
    } else if (refName === 'otp4') {
      otpInput4Ref.current.focus();
    }
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

          <View style={{ marginTop: 40, padding: 40 }}>
            <Text style={styles.headerText}>
              Please enter verification code sent to
            </Text>
            <Text style={{ color: '#250075', fontSize: 18, fontWeight: 'bold' }}>
              +91 73*** ***58
            </Text>
          </View>

          <View style={styles.otpInputs}>
            <TextInput
              style={styles.input}
              placeholder="0"
              maxLength={1}
              value={otp1}
              onChangeText={(text) => {
                setOTP1(text);
                if (text.length === 1) {
                  focusNextInput('otp2');
                }
              }}
              keyboardType="numeric"
            />
            <TextInput
              ref={otpInput2Ref}
              style={styles.input}
              placeholder="0"
              maxLength={1}
              value={otp2}
              onChangeText={(text) => {
                setOTP2(text);
                if (text.length === 1) {
                  focusNextInput('otp3');
                }
              }}
              keyboardType="numeric"
            />
            <TextInput
              ref={otpInput3Ref}
              style={styles.input}
              placeholder="0"
              maxLength={1}
              value={otp3}
              onChangeText={(text) => {
                setOTP3(text);
                if (text.length === 1) {
                  focusNextInput('otp4');
                }
              }}
              keyboardType="numeric"
            />
            <TextInput
              ref={otpInput4Ref}
              style={styles.input}
              placeholder="0"
              maxLength={1}
              value={otp4}
              onChangeText={(text) => setOTP4(text)}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Text style={[styles.headerText, { textAlign: 'center' }]}>Resend</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity style={styles.SecondaryBtn} onPress={handleOTPSubmit}>
            <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}>
              Verify
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  MainWrap: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 16,
    color: '#8E8E8E',
    width: 200,
    marginBottom: 20,
  },
  otpInputs: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 20,
  },
  input: {
    width: 60,
    height: 60,
    borderColor: '#2A0087',
    borderBottomWidth: 6,
    paddingHorizontal: 15,
    color: '#6B4EFF',
    marginBottom: 20,
    fontSize: 48,
    textAlign: 'center',
  },
  SecondaryBtn: {
    backgroundColor: '#6B4EFF',
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 24,
    textAlign: 'center',
    alignItems: 'center',
    margin: 25,
    marginBottom: 40
  },
});

export default OTPScreen;
