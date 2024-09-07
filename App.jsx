import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './src/components/Signin';
import Register from './src/components/Register';
import ForgotPass from './src/components/ForgotPass';
import WelcomePage from './src/components/WelcomePage';
import WelcomeTwo from './src/components/WelcomeTwo';
import WelcomeThree from './src/components/WelcomeThree';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="WelcomeTwo" component={WelcomeTwo} options={{ headerShown: false }} />
        <Stack.Screen name="WelcomeThree" component={WelcomeThree} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
