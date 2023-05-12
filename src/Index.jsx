import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { stackOptions } from "./layouts/stackOptions";
import { tabOptions } from "./layouts/tabOptions";

import DashboardScreen from "./screens/DashboardScreen";
import IncomeScreen from "./screens/IncomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

import ModalScreen from './screens/ModalScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from "./screens/SignUpScreen";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ExpenseScreen from "./screens/ExpenseScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Index = () => {
  const [user, setUser] = useState(undefined);

  AsyncStorage.setItem('yorchFinancialUser', 'fakeUserToken');

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
        <Tab.Screen name="DashboardScreen" component={DashboardScreen} options={{
            title: 'Dashboard',
            tabBarIcon: () => <MaterialCommunityIcons name="view-dashboard-edit-outline" size={28} color="white" />
          }}
        />
        <Tab.Screen name="IncomeScreen" component={IncomeScreen} options={{
            title: 'Ingresos',
            tabBarIcon: () => <MaterialIcons name="attach-money" size={28} color="white" />
          }}
        />
        <Tab.Screen name="ExpenseScreen" component={ExpenseScreen} options={{
            title: 'Gastos',
            tabBarIcon: () => <MaterialIcons name="money-off" size={28} color="white" />
          }}
        />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
            title: 'Profile',
            tabBarIcon: () => <FontAwesome5 name="user-edit" size={22} color="white" />
          }}
        />
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
