import React from 'react';
import { View, StatusBar, ScrollView, StyleSheet } from 'react-native';

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      {/* Set the StatusBar to transparent */}
      <StatusBar translucent backgroundColor="transparent" />

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Your scrollable content goes here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set the background color of your layout
  },
  content: {
    // Add padding or margins as needed for your content
    padding: 16,
  },
});

export default InboxScreen;








// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import Swiper from 'react-native-swiper';

// const HomeScreen = () => {
//   const banners = [
//     { image: require('../../assets/Start/Bag.png'), text: 'Banner 1' },
//     { image: require('../../assets/Start/Bag.png'), text: 'Banner 2' },
//     { image: require('../../assets/Start/Bag.png'), text: 'Banner 3' },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* <Swiper
//         style={styles.wrapper}
//         autoplay={true}
//         autoplayTimeout={5}
//         loop={true}
//         showsPagination={false}
//       >
//         {banners.map((banner, index) => (
//           <View key={index} style={styles.slide}>
//             <Image source={banner.image} style={styles.image} />
//             <Text style={styles.text}>{banner.text}</Text>
//           </View>
//         ))}
//       </Swiper> */}
//       <Text>Home</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     flex: 1,
//   },
//   wrapper: {
//     height: 200,
//   },
//   slide: {
//     flex: 1,
//     alignItems: 'center',height:200
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   text: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default HomeScreen;


