// OnboardingScreen1.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// #2A0087
const Onboarding2 = ({ navigation }) => {
  return (
    // Main App Screen Dimentsions
    <View style={styles.MainWrap}>
      <StatusBar barStyle="dark-content" />

      {/* View For Skip and Bannner */}
      <View style={{ marginTop: 60 }}>
        {/* Skip Btn */}
        <TouchableOpacity
          onPress={() => navigation.navigate('MainTabNavigator')}
          style={styles.PrimaryBtnBordered}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#2A0087' }}>Skip</Text>
        </TouchableOpacity>
        {/* View For Banner Image */}
        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 180, height: 400 }} source={require('../../../assets/Start/pose1.png')} />
        </View>
        {/* View For Text */}
        <View style={{ alignItems: 'center', width: 260, alignSelf: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: '500', color: '#2A0087', lineHeight: 40, textAlign: 'center', marginBottom: 10 }}>Make Your Own Learning Environment</Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#8E8E8E', lineHeight: 25, textAlign: 'center' }}>A vast accessibility to your classrooms every time</Text>
        </View>

        {/* View For Btn */}
        <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
          <View style={{ width: 8, height: 20, borderRadius: 8, backgroundColor: '#2A0087', margin: 5 }}></View>
          <View style={{ width: 8, height: 8, borderRadius: 8, backgroundColor: 'lightgrey', margin: 5, marginTop: 10 }}></View>
        </View>
        {/* Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Onboarding3')}
          style={styles.PrimaryBtnRound}>
          <View style={styles.PrimaryBtnRoundInner}>
            {/* <Text style={{fontSize: 36, fontWeight: '500', color: '#FFFFFF',marginTop:-5}}>{'>'}</Text> */}
            <Ionicons name={'chevron-forward-outline'} size={36} color={'#FFFFFF'} />
          </View>
        </TouchableOpacity>
        <Text>
        </Text>
      </View>

      {/* View For Get Started And Buttons */}
      {/* <LinearGradient
        // Background Linear Gradient
        colors={['#6B4EFF', '#9682EC']}
        style={styles.background}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 36, textAlign: 'center', fontWeight: '500', marginBottom: 20 }}>Welcome</Text>
        <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center', fontWeight: '400', marginBottom: 40, width: 220 }}>Enhance your learning with us</Text>
        <TouchableOpacity style={styles.PrimaryBtn}
          onPress={() => navigation.navigate('Onboarding2')}
        >
          <Text style={{ fontSize: 16, color: '#6B4EFF', fontWeight: 'bold' }}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient> */}
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
    // height:100
  },
  PrimaryBtnBordered: {
    borderWidth: 2,
    position: 'absolute',
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: '#2A0087',
    zIndex: 999
  },
  PrimaryBtnRound: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#9682EC',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40
  },
  PrimaryBtnRoundInner: {
    backgroundColor: '#0A0087', 
    width: 75, 
    height: 75, 
    borderRadius: 50,
    borderWidth:8,
    borderColor:'whitesmoke' ,
    alignItems:'center',
    justifyContent:'center'
  }

});

export default Onboarding2;
