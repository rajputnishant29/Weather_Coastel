import { View, Text ,TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Signin = ({navigation}) => {
  return (
    <View>
    <ImageBackground 
    source={require('../../assets/images/backgroundimg.png')}
    className="h-full"

    >
    <View className="flex-row justify-between mt-5">
       <TouchableOpacity
       onPress={()=> navigation.navigate('Register')}>
         <Text className="text-xl text-black px-4">
         <Icon name="arrow-left" size={20} color="black" />
         </Text>
       </TouchableOpacity>
       <TouchableOpacity
       onPress={()=> navigation.navigate('ForgotPass')}>
       <Text className="text-xl text-black px-4">Skip<Text> </Text>
       <Icon name="arrow-right" size={20} color="black" />
       </Text>
       </TouchableOpacity>
     </View>
     <Text className="text-black px-4 text-xl font-semibold mt-40">
     “Your privacy and security are our top priorities—let's get started!"
     </Text>
     <Text className="text-3xl font-bold text-black p-5 my-6">Sign In!!</Text>
     <TextInput className="border border-blue-900 rounded-3xl px-5 mx-4 mb-3" placeholder='Email' keyboardType='email-address'/>
     <TextInput className="border border-blue-900 rounded-3xl px-5 mx-4 mb-3" placeholder='Password' keyboardType='visible-password' secureTextEntry={true}/>
     <TextInput className="border border-blue-900 rounded-3xl px-5 mx-4" placeholder='Confirm Password' keyboardType='visible-password' secureTextEntry={true}/>
     
     <TouchableOpacity
       onPress={()=> navigation.navigate('ForgotPass')}>
         <Text className="text-xl text-blue-500 px-4 mt-2">Forgot Password?</Text>
       </TouchableOpacity>

     <View className="flex-row mt-5">
       <Text className="text-black pl-4 text-xl">Didn't have an Account?</Text>
       <TouchableOpacity
       onPress={()=> navigation.navigate('Register')}>
         <Text className="text-xl text-red-600">Sign up</Text>
       </TouchableOpacity>
     </View>

     <View className="flex-row gap-4 justify-center mt-3">
    <Text>
       <Icon name="google" size={35} color="black" />
     </Text>
     <Text>
     <Icon name="instagram" size={35} color="black" />
     </Text>
     <Text>
     <Icon name="twitter" size={35} color="black" />
     </Text>
     <Text>
     <Icon name="envelope" size={35} color="black" />
     </Text>
    </View>

    <TouchableOpacity className="mx-4 py-3 bg-red-500 border-blue-900 rounded-3xl mt-10 border">
     <Text className="text-white text-center text-xl">SIGN IN</Text>
    </TouchableOpacity>


    </ImageBackground>
   </View>
  )
}

export default Signin