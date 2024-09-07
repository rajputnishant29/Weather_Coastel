import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import Typical from 'react-native-typical';

const WelcomePage = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/BeachBG.png')}
        className="h-full">
        <Text className="text-black font-bold text-3xl mt-80 px-4">
          Welcome To Coastal Tourism
        </Text>

        <Typical
          steps={[' Get ready to explore the shores with confidence. Our app is your trusted companion for safe and enjoyable beach visits.', 1000]} // Text and pause duration
          loop={1} // Number of loops
          wrapper="Text"
          className="text-black px-4 text-xl font-semibold mt-10"
        />

        <TouchableOpacity
        onPress={()=> navigation.navigate('WelcomeTwo')}
        className="py-3 px-10 bg-transparent border-blue-900 rounded-3xl absolute bottom-2 right-4 border">
          <Text className="text-zinc-700 text-center text-xl">NEXT</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default WelcomePage;
