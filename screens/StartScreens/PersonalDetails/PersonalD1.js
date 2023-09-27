import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

function PersonalD1() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedAge, setSelectedAge] = useState('12 - 16 Years');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [ageDropdownOpen, setAgeDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);

  const [options, setOptions] = useState([
    'Social Science',
    'Physics',
    'Chemistry',
    'Computer',
    'Mathematics',
    // Add more items as needed
  ]);

  const ageOptions = ['0-1 years', '0-10 years', '10-18 years'];
  const langOptions = ['English', 'Hindi', 'Marathi'];
  const [filteredOptions, setFilteredOptions] = useState(options);

  const toggleDropdown = (dropdownName) => {
    if (dropdownName === 'subject') {
      setSubjectDropdownOpen(!subjectDropdownOpen);
      setAgeDropdownOpen(false);
      setLanguageDropdownOpen(false);
    } else if (dropdownName === 'age') {
      setAgeDropdownOpen(!ageDropdownOpen);
      setSubjectDropdownOpen(false);
      setLanguageDropdownOpen(false);
    } else if (dropdownName === 'language') {
      setLanguageDropdownOpen(!languageDropdownOpen);
      setSubjectDropdownOpen(false);
      setAgeDropdownOpen(false);
    }
  };

  const selectItem = (item, dropdownName) => {
    if (dropdownName === 'subject') {
      setSelectedItems([...selectedItems, { text: item, id: Date.now() }]);
    }
    if (dropdownName === 'age') {
      setSelectedAge(item);
    } else if (dropdownName === 'language') {
      setSelectedLanguage(item);
    }
    setSubjectDropdownOpen(false);
    setAgeDropdownOpen(false);
    setLanguageDropdownOpen(false);
  };

  const removeItem = (item) => {
    const updatedItems = selectedItems.filter((i) => i !== item);
    setSelectedItems(updatedItems);
  };

  const filterOptions = (text) => {
    const filtered = options.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const navigation = useNavigation();

  const navigateToPersonalD2 = () => {
    navigation.navigate('PersonalD2', { selectedSubjects: selectedItems });
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
              <Text style={styles.headerText}>Customise</Text>
              <Text style={{ color: '#6B4EFF', fontSize: 24, fontWeight: '400' }}>
                Your Details
              </Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 20, width: '100%', marginTop: 30 }}>
              <View style={{ width: '45%' }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 16 }}>Your Age</Text>
                <TouchableOpacity onPress={() => toggleDropdown('age')} style={styles.dropdownHeader}>
                  <Text style={{ color: '#8E8E8E' }}>{selectedAge}</Text>
                  <Icon name={ageDropdownOpen ? 'chevron-up' : 'chevron-down'} size={14} color="black" />
                </TouchableOpacity>
                {ageDropdownOpen && (
                  <ScrollView style={styles.dropdownOptions}>
                    {ageOptions.map((option) => (
                      <TouchableOpacity
                        key={option}
                        onPress={() => selectItem(option, 'age')}
                        style={styles.dropdownOption}
                      >
                        <Text>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                )}
              </View>

              <View style={{ width: '45%' }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 16 }}>Language</Text>
                <TouchableOpacity onPress={() => toggleDropdown('language')} style={styles.dropdownHeader}>
                  <Text style={{ color: '#8E8E8E' }}>{selectedLanguage}</Text>
                  <Icon name={languageDropdownOpen ? 'chevron-up' : 'chevron-down'} size={14} color="black" />
                </TouchableOpacity>
                {languageDropdownOpen && (
                  <ScrollView style={styles.dropdownOptions}>
                    {langOptions.map((option) => (
                      <TouchableOpacity
                        key={option}
                        onPress={() => selectItem(option, 'language')}
                        style={styles.dropdownOption}
                      >
                        <Text>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                )}
              </View>
            </View>

            <View style={{ width: '100%', marginTop: 30 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 16 }}>Preferred Subjects</Text>
              <View>
                <TouchableOpacity onPress={() => toggleDropdown('subject')} style={styles.dropdownHeader}>
                  <Text style={{ color: '#8E8E8E' }}>Select Subject</Text>
                  <Icon name={subjectDropdownOpen ? 'chevron-up' : 'chevron-down'} size={14} color="black" />
                </TouchableOpacity>
                {subjectDropdownOpen && (
                  <ScrollView style={styles.dropdownOptions}>
                    <TextInput
                      placeholder="Search..."
                      style={styles.searchInput}
                      onChangeText={(text) => filterOptions(text)}
                    />
                    {filteredOptions.length === 0 ? (
                      <Text style={styles.noSubjectsText}>No subjects found</Text>
                    ) : (
                      filteredOptions.map((item) => (
                        <TouchableOpacity
                          key={item}
                          onPress={() => selectItem(item, 'subject')}
                          style={styles.dropdownOption}
                        >
                          <Text>{item}</Text>
                        </TouchableOpacity>
                      ))
                    )}
                  </ScrollView>
                )}
              </View>
              <View style={styles.tagContainer}>
                {selectedItems.map((item) => (
                  <View key={item.id} style={styles.tag}>
                    <Text style={{ color: '#FFFFFF', fontSize: 12 }}>{item.text}</Text>
                    <TouchableOpacity onPress={() => removeItem(item)} style={{ justifyContent: 'center' }}>
                      <Icon name="times" size={12} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>

          </View>
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity style={styles.SecondaryBtn} onPress={navigateToPersonalD2}>
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
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  tag: {
    backgroundColor: '#6B4EFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  tagInput: {
    flex: 1,
    height: 40,
  },
  searchInput: {
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: '#CCC',
  },
  dropdownHeader: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
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
});

export default PersonalD1;
