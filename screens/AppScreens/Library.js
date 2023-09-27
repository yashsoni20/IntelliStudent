import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH * 0.8;

const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry'];

const cardsData = [
  { subject: 'Mathematics', title: 'Mathematics' },
  { subject: 'Physics', title: 'Physics' },
  { subject: 'Chemistry', title: 'Chemistry' },
  // Add more cards and subjects here
];

const gradientColors = {
  All: ['#6B4EFF', '#2A0087'],
  Mathematics: ['#6B4EFF', '#2A0087'],
  Physics: ['#BDBDBD', '#2A0087'],
  Chemistry: ['#FFC226', '#2A0087'],
};


const LibraryScreen = ({ navigation }) => {
  const [selectedSubject, setSelectedSubject] = useState('All');

  const filterCards = () => {
    if (selectedSubject === 'All') {
      return cardsData;
    } else {
      return cardsData.filter((card) => card.subject === selectedSubject);
    }
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
        <Text style={{ color: '#2A0087', fontWeight: '600', fontSize: 36 }}>Library</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', width: '80%' }}>
            <Ionicons name={'search-outline'} color={'#8E8E8E'} size={24} />
            <TextInput placeholder='Search' placeholderTextColor={'#8E8E8E'} style={{ height: 30, fontSize: 18, width: '100%' }} />
          </View>
          <View style={{ alignItems: 'flex-end', width: '20%' }}>
            <Ionicons name={'filter-outline'} color={'black'} size={28} />
          </View>
        </View>


        {/* Filter My Courses */}

        <View style={{ marginBottom: 20 }}>
          <ScrollView horizontal style={{ marginTop: 20 }}>
            <View style={styles.filterContainer}>
              {subjects.map((subject) => (
                <TouchableOpacity
                  key={subject}
                  style={[
                    styles.filterButton,
                    selectedSubject === subject
                  ]}
                  onPress={() => setSelectedSubject(subject)}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      selectedSubject === subject && styles.selectedFilterButtonText,
                    ]}
                  >
                    {subject}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', width: '100%' }}>
            <View style={{ backgroundColor: 'orange', borderRadius: 10, margin: 10, padding: 10, width: '45%' }}>
              <Text style={{ color: '#250075', fontWeight: 'bold', fontSize: 16 }}>Projects</Text>
              <Text style={{ color: '#6544F2', fontWeight: 'bold', fontSize: 24, marginTop: 20 }}>05</Text>
              <Image source={require('../../assets/DashBoard/Rectangle.png')} style={{ position: 'absolute', width: 60, height: 80, resizeMode: 'contain', bottom: 0, right: 0 }} />
            </View>
            <View style={{ backgroundColor: 'lightgreen', borderRadius: 10, margin: 10, padding: 10, width: '45%' }}>
              <Text style={{ color: '#250075', fontWeight: 'bold', fontSize: 16 }}>Current Task</Text>
              <Text style={{ color: '#6544F2', fontWeight: 'bold', fontSize: 24, marginTop: 20 }}>05</Text>
              <Image source={require('../../assets/Start/pose1.png')} style={{ position: 'absolute', width: 50, height: 80, resizeMode: 'contain', bottom: 0, right: 0 }} />
            </View>

          </View>
          {/* Comment For Sorting Cards */}
          {/* <View>
            {filterCards().map((card, index) => (
              <LinearGradient
                colors={gradientColors[card.subject]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                key={index}
                style={styles.CourseCard}>
                <Text style={styles.CourseCardTitle}>{card.title}</Text>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <View>
                    <Text style={{ color: '#250075', fontWeight: 'bold', fontSize: 12 }}>Sessions</Text>
                    <Text style={{ color: '#6544F2', fontWeight: 'bold', fontSize: 24 }}>05</Text>
                  </View>
                </View>
                <Text style={{ color: 'white', fontSize: 14 }}>Lecture by Sahil Verma</Text>
                <Image source={require('../../assets/DashBoard/Rectangle.png')} style={{ position: 'absolute', width: 100, height: 150, resizeMode: 'contain', bottom: 0, right: 0 }} />

              </LinearGradient>
            ))}
          </View> */}

          {/* Topics */}
        <View>
          <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor: 'lightgray', alignContent: 'center', paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10, margin: 10 }}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>01 Topic</Text>
            <Ionicons name={'chevron-forward'} size={24}/>
          </TouchableOpacity>
          
          <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor: 'lightgray', alignContent: 'center', paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10, margin: 10 }}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>02 Topic</Text>
            <Ionicons name={'chevron-forward'} size={24}/>
          </TouchableOpacity>
          
          <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor: 'lightgray', alignContent: 'center', paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10, margin: 10 }}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>03 Topic</Text>
            <Ionicons name={'chevron-forward'} size={24}/>
          </TouchableOpacity>
        </View>
        </View>

      </ScrollView>

    </View>
  );
};

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
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 3,
    color: '#250075'
  },
  semiHeadTxt: {
    color: '#6544F2',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 3,
  },
  searchContainer: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row'
  },
  UpcomingCard: {
    backgroundColor: 'red',
    width: CARD_WIDTH,
    padding: 20,
    borderRadius: 24,
    marginRight: 20,
    ...Platform.select({
      android: {
        elevation: 5, // Adjust the elevation to control the shadow intensity
      },
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1, // Adjust the shadowOpacity to control the shadow's transparency
        shadowRadius: 5, // Adjust the shadowRadius to control the shadow's blur radius
        shadowColor: '#000', // Set your desired shadow color
      },
    }),

  },
  UpcomingCardCapsule: {
    marginTop: 20,
    width: CARD_WIDTH * 0.6,
    flexDirection: 'row',

  },
  capsuleLeft: {
    width: '60%', backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: 'center',
  },

  capsuleRight: {
    width: '40%',
    backgroundColor: '#2A0087',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  filterButton: {
    marginRight: 15,
    justifyContent: 'center'
  },

  filterButtonText: {
    color: '#8E8E8E',
    fontSize: 16
  },
  selectedFilterButtonText: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 20

  },

  CourseCard: {
    width: '100%', // Adjust the width as needed for your layout
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 24,
    marginBottom: 16,
  },
  CourseCardTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: 10
  }
});

export default LibraryScreen;
