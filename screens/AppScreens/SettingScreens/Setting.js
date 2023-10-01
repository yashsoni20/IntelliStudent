import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import FeatureComparisonModal from './PlanUpgrade';

export default function SettingS({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  // Sample feature data
  const features = [
    { name: 'Feature 1', price: '$10/month' },
    { name: 'Feature 2', price: '$15/month' },
    { name: 'Feature 3', price: '$20/month' },
    // Add more features as needed
  ];
  return (
    <View style={styles.container}>
      {/* Set the StatusBar to transparent */}
      <StatusBar translucent backgroundColor="transparent" />
      {/* Notifcation safe area */}
      <View style={{ backgroundColor: 'white', width: '100%', height: 35 }}></View>
      {/* Content */}
      <ScrollView contentContainerStyle={styles.MainWrap}>
        {/* Your scrollable content goes here */}
        <Text style={{ color: '#2A0087', fontWeight: '600', fontSize: 36 }}>Setting</Text>
        <View style={{ flexDirection: 'row', backgroundColor: 'blue', borderRadius: 7, padding: 20, marginVertical: 25, width: '100%' }}>
          <View style={{ width: '70%' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Basic Membership</Text>
            <Text style={{ color: 'white', marginTop: 10 }}>Upgrade For More Features</Text>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={{ alignContent: 'center', justifyContent: 'center', width: '30%' }}>
            <Text style={{ alignContent: 'center', color: 'white', fontSize: 16, fontWeight: 'bold' }}>Upgrade</Text>
          </TouchableOpacity>
        </View>
        <FeatureComparisonModal visible={modalVisible} onClose={() => setModalVisible(false)} features={features} />
  
        <View>
          <Text style={styles.HeadTxt}>Account</Text>
          <View style={{ marginTop: 20 }}>

            <TouchableOpacity style={styles.navBtn}>
              <View style={{ width: '80%', flexDirection: 'row', gap: 10 }}>
                <Ionicons name={'person-outline'} color={'black'} size={20} />
                <Text style={styles.secondTxt}>Profile</Text>
              </View>
              <View style={{ width: '20%', alignItems: 'flex-end' }}>
                <Ionicons name={'chevron-forward-outline'} color={'black'} size={20} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navBtn}>
              <View style={{ width: '80%', flexDirection: 'row', gap: 10 }}>
                <Ionicons name={'wallet-outline'} color={'black'} size={20} />
                <Text style={styles.secondTxt}>Payments</Text>
              </View>
              <View style={{ width: '20%', alignItems: 'flex-end' }}>
                <Ionicons name={'chevron-forward-outline'} color={'black'} size={20} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navBtn}>
              <View style={{ width: '80%', flexDirection: 'row', gap: 10 }}>
                <Ionicons name={'ribbon-outline'} color={'black'} size={20} />
                <Text style={styles.secondTxt}>Subscriptions</Text>
              </View>
              <View style={{ width: '20%', alignItems: 'flex-end' }}>
                <Ionicons name={'chevron-forward-outline'} color={'black'} size={20} />
              </View>
            </TouchableOpacity>
            {/* call-outline headset-outline help-circle-outline person-outline power-outline  */}
          </View>
        </View>

        <View style={{marginBottom:20}}>
          <Text style={styles.HeadTxt}>More</Text>
          <View style={{ marginTop: 20 }}>

            <TouchableOpacity style={styles.navBtn}>
              <View style={{ width: '80%', flexDirection: 'row', gap: 10 }}>
                <Ionicons name={'help-circle-outline'} color={'black'} size={20} />
                <Text style={styles.secondTxt}>Help & Support</Text>
              </View>
              <View style={{ width: '20%', alignItems: 'flex-end' }}>
                <Ionicons name={'chevron-forward-outline'} color={'black'} size={20} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navBtn}>
              <View style={{ width: '80%', flexDirection: 'row', gap: 10 }}>
                <Ionicons name={'call-outline'} color={'black'} size={20} />
                <Text style={styles.secondTxt}>Contact Us</Text>
              </View>
              <View style={{ width: '20%', alignItems: 'flex-end' }}>
                <Ionicons name={'chevron-forward-outline'} color={'black'} size={20} />
              </View>
            </TouchableOpacity>

            {/*  headset-outline h person-outline   */}
          </View>
        </View>

        <TouchableOpacity style={styles.navBtn}>
          <View style={{ width: '80%', flexDirection: 'row', gap: 10 }}>
            <Ionicons name={'power-outline'} color={'black'} size={20} />
            <Text style={styles.secondTxt}>Logout</Text>
          </View>
          <View style={{ width: '20%', alignItems: 'flex-end' }}>
            <Ionicons name={'chevron-forward-outline'} color={'black'} size={20} />
          </View>
        </TouchableOpacity>
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
  ProfileBG: {
    width: 53,
    height: 53,
    borderRadius: 18,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  HeadTxt: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  secondTxt: {
    fontSize: 18,
    fontWeight: '400',
  },
  navBtn: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20

  }
})