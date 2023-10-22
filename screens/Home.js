import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer2}>
      <Image style={styles.image2} source={require("../assets/S001613333.png")} />
      <Image style={styles.image2} source={require("../assets/S001613333.png")} />

      </View>
      <View style={styles.imageContainer}>
      <TouchableOpacity>
          <Image style={styles.image} source={require("../assets/aliborauser.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>
          <Image style={styles.image} source={require("../assets/aliboraqr.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Video')}>
          <Image style={styles.image} source={require("../assets/aliboravideo.png")} />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Değiştirildi
    alignItems: 'flex-start',
    borderWidth:1,
    borderColor:'black',
    top:50
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 30,
     // Resimler arasında yatay boşluk ekler
  },
  image2: {
    width: 350,
    height: 250,
    paddingVertical:5,
    marginVertical:5
     // Resimler arasında yatay boşluk ekler
  },
  imageContainer2: {
    flexDirection: 'column',
    justifyContent: 'flex-start', // Değiştirildi
    alignItems: 'flex-start',
    borderWidth:1,
    borderColor:'black',
  
  },
  
});
