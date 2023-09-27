// OnboardingScreen1.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Onboarding1 = ({ navigation }) => {
  return (
    // Main App Screen Dimentsions
    <View style={styles.MainWrap}>
      <StatusBar barStyle="dark-content" />

      {/* View For Logo and Bannner */}
      <View style={{ marginTop: 80 }}>
        {/* View For Logo */}
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../../assets/Start/Vector.png')} />
          <Text style={{ fontSize: 18, fontWeight: 500, marginTop: 10 }}>Intelli Edtech</Text>
        </View>

        {/* View For Banner Image */}
        <View style={{alignItems:'center'}}>
          <Image source={require('../../../assets/Start/pose1.png')} />
        </View>
      </View>

      {/* View For Get Started And Buttons */}
      <LinearGradient
        // Background Linear Gradient
        colors={['#6B4EFF', '#9682EC']}
        style={styles.background}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 36, textAlign: 'center', fontWeight: '500', marginBottom: 20 }}>Welcome</Text>
        <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center', fontWeight: '400', marginBottom: 40, width: 220 }}>Enhance your learning with us</Text>
        <TouchableOpacity style={styles.PrimaryBtnLight}
          onPress={() => navigation.navigate('Onboarding2')}
        >
          <Text style={{ fontSize: 16, color: '#6B4EFF', fontWeight: 'bold' }}>Get Started</Text>
        </TouchableOpacity>
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
    alignItems: 'center'
  },
  PrimaryBtnLight: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 24,
    textAlign: 'center',
    alignItems: 'center'
  }
});

export default Onboarding1;
