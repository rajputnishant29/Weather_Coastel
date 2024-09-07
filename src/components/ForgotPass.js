import { View, Text ,TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const ForgotPass = ({navigation}) => {
  return (
    <View>
     <ImageBackground
     source={require('../../assets/images/backgroundimg.png')}
     className="h-full"

     >
     <View className="flex-row justify-between mt-5">
        <TouchableOpacity
        onPress={()=> navigation.navigate('Signin')}>
          <Text className="text-xl text-black px-4">
          <Icon name="arrow-left" size={20} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text className="text-xl text-black px-4">Skip<Text> </Text>
        <Icon name="arrow-right" size={20} color="black" />
        </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-black px-4 text-xl font-semibold mt-40">
      Please enter your email address.You will receive a link to create a new password  via email.
      </Text>
      <Text className="text-3xl font-bold text-black p-5 my-6">Forgot Password!!</Text>
      <TextInput className="border border-blue-900 rounded-3xl px-5 mx-4 mb-3" placeholder='Email' keyboardType='email-address'/>
      
     <TouchableOpacity className="mx-4 py-3 bg-red-500 border-blue-900 rounded-3xl mt-10 border">
      <Text className="text-white text-center text-xl">SEND</Text>
     </TouchableOpacity>


     </ImageBackground>
    </View>
  )
}

export default ForgotPass