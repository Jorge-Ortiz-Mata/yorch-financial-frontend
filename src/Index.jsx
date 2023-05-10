import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { stackOptions } from "./layouts/stackOptions";
import { tabOptions } from "./layouts/tabOptions";

import ModalScreen from './screens/ModalScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from "./screens/SignUpScreen";
import DashboardScreen from "./screens/DashboardScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Index = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setTimeout(async () => {
          const response = await AsyncStorage.getItem('yorchFinancialUser');
          setUser(response);
        }, 1500);

      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, []);

  if(user === undefined) return <ModalScreen />

  if(user) return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="DashboardScreen" screenOptions={tabOptions}>
        <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )

  if(user === null) return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={stackOptions}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index;
