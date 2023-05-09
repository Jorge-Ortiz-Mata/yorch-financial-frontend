import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModalScreen from './screens/ModalScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from "./screens/SignUpScreen";

const Stack = createNativeStackNavigator();

const Index = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpScreen" screenOptions={{ contentStyle: "#000000" }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index;
