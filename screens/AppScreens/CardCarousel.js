import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, PanResponder } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH * 0.7;
const CARD_HEIGHT = SCREEN_WIDTH * 0.9;

const CardCarousel = ({ data }) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        // Implement card dragging logic here
      },
      onPanResponderRelease: (event, gesture) => {
        // Implement card release logic here
      },
    })
  ).current;

  const renderCards = () => {
    return data.map((item, index) => {
      return (
        <Animated.View
          key={index}
          style={[styles.card, { zIndex: -index }]}
          {...panResponder.panHandlers}
        >
          <Text>{item.title}</Text>
        </Animated.View>
      );
    });
  };

  return <View style={styles.container}>{renderCards()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardCarousel;
