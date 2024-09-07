import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import Typical from 'react-native-typical';

const WelcomeTwo = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/BeachBG.png')}
        className="h-full">
        
        <Typical
          steps={['Instantly check wave conditions,ocean currents, wind speeds, andwater quality all in real time.Whether you’re planning to relax ordive into adventure, we’ve got you covered.', 1000]} // Text and pause duration
          loop={1} // Number of loops
          wrapper="Text"
          className="text-black px-4 text-xl font-semibold mt-80"
        />

        <TouchableOpacity 
        onPress={()=> navigation.navigate('WelcomeThree')}
        className="py-3 px-10 bg-transparent border-blue-900 rounded-3xl absolute bottom-2 right-4 border">
          <Text className="text-zinc-700 text-center text-xl">NEXT</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default WelcomeTwo;