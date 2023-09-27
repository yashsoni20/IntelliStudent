import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// import SvgUri from 'react-native-svg-uri';
import countries from './Countries';

function CountryDropdown() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChange = (value) => {
        setSelectedCountry(value);
    };

    return (
        <View style={styles.container}>
            <RNPickerSelect
                onValueChange={handleChange}
                items={countries}
                textInputProps={{ style: { color: '#2A0087' } }}
                placeholder={{ label: 'IND', value: null }}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'15%'
    },
    flagContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
});

export default CountryDropdown;
