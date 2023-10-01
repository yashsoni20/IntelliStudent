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

const topicsData = {
  All: [
    {
      name: '01 Topic',
      heading: 'Trigonometry heading 01',
      paragraph: 'Demo data for Topic 01 paragraph',
      // Add more fields as needed
    },
    {
      name: '02 Topic',
      heading: 'Trigonometry heading 02',
      paragraph: 'Demo data for Topic 02 paragraph',
      // Add more fields as needed
    },
    {
      name: '03 Topic',
      heading: 'Trigonometry heading 03',
      paragraph: 'Demo data for Topic 03 paragraph',
      // Add more fields as needed
    },
  ],
  Mathematics: [
    {
      name: 'Sessions',
      heading: 'Sessions heading',
      paragraph: 'Demo data for Sessions paragraph',
      // Add more fields as needed
    },
    {
      name: 'Assignments',
      heading: 'Assignments heading',
      paragraph: 'Demo data for Assignments paragraph',
      // Add more fields as needed
    },
    {
      name: 'Examinations',
      heading: 'Examinations heading',
      paragraph: 'Demo data for Examinations paragraph',
      // Add more fields as needed
    },
  ],
  Physics: [
    {
      name: 'Topic X',
      heading: 'Topic X heading',
      paragraph: 'Demo data for Topic X paragraph',
      // Add more fields as needed
    },
    {
      name: 'Topic Y',
      heading: 'Topic Y heading',
      paragraph: 'Demo data for Topic Y paragraph',
      // Add more fields as needed
    },
    {
      name: 'Topic Z',
      heading: 'Topic Z heading',
      paragraph: 'Demo data for Topic Z paragraph',
      // Add more fields as needed
    },
  ],
  Chemistry: [
    {
      name: 'Topic P',
      heading: 'Topic P heading',
      paragraph: 'Demo data for Topic P paragraph',
      // Add more fields as needed
    },
    {
      name: 'Topic Q',
      heading: 'Topic Q heading',
      paragraph: 'Demo data for Topic Q paragraph',
      // Add more fields as needed
    },
    {
      name: 'Topic R',
      heading: 'Topic R heading',
      paragraph: 'Demo data for Topic R paragraph',
      // Add more fields as needed
    },
  ],
};


const LibraryS = ({ navigation }) => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [expandedTopic, setExpandedTopic] = useState(null);

  const filterCards = () => {
    if (selectedSubject === 'All') {
      return cardsData;
    } else {
      return cardsData.filter((card) => card.subject === selectedSubject);
    }
  };

  const filterTopics = () => {
    if (selectedSubject === 'All') {
      // Show all topics when "All" is selected
      const allTopics = [];
      Object.keys(topicsData).forEach((subject) => {
        allTopics.push(...topicsData[subject]);
      });
      return allTopics;
    } else {
      return topicsData[selectedSubject];
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
              <Image source={require('../../../assets/DashBoard/Rectangle.png')} style={{ position: 'absolute', width: 60, height: 80, resizeMode: 'contain', bottom: 0, right: 0 }} />
            </View>
            <View style={{ backgroundColor: 'lightgreen', borderRadius: 10, margin: 10, padding: 10, width: '45%' }}>
              <Text style={{ color: '#250075', fontWeight: 'bold', fontSize: 16 }}>Current Task</Text>
              <Text style={{ color: '#6544F2', fontWeight: 'bold', fontSize: 24, marginTop: 20 }}>05</Text>
              <Image source={require('../../../assets/Start/pose1.png')} style={{ position: 'absolute', width: 50, height: 80, resizeMode: 'contain', bottom: 0, right: 0 }} />
            </View>

          </View>

          {/* Topics */}
          <View>
            {filterTopics().map((topic, index) => (
              <View key={topic.name}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'lightgray',
                    alignContent: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    borderRadius: 10,
                    margin: 10,
                  }}
                  onPress={() => setExpandedTopic(expandedTopic === topic.name ? null : topic.name)}
                >
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{topic.name}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6B4EFF' }}>23 hrs</Text>
                    <Ionicons name={expandedTopic === topic.name ? 'chevron-up' : 'chevron-down'} size={24} />
                  </View>
                </TouchableOpacity>
                {expandedTopic === topic.name && (
                  <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 10, borderBottomWidth: 1, borderColor: 'gray' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 10 ,width:'100%'}}>
                      <View style={{ width: 140, height: 80, backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#6B4EFF', width: 40, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                          <Ionicons name={'play-outline'} style={{marginLeft:5}} color={'white'} size={24} />
                        </View>
                      </View>
                      <View style={{width:170}}>
                        <Text style={{ color: '#2A0087', fontSize: 15, fontWeight: '500', marginVertical: 8 }}>{topic.heading}</Text>
                        <Text style={{ color: '#2A0087', fontSize: 14 }}>{topic.paragraph}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}

              </View>
            ))}
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

export default LibraryS;
