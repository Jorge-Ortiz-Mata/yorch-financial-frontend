import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { stackOptions } from "./layouts/stackOptions";
import { tabOptions } from "./layouts/tabOptions";

import { userActions } from "./store/userSlice";

import DashboardScreen from "./screens/DashboardScreen";
import IncomeScreen from "./screens/IncomeScreen";
import NewIncomeScreen from "./screens/NewIncomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";

import ModalScreen from "./screens/ModalScreen";
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from "./screens/SignUpScreen";

import ExpenseScreen from "./screens/ExpenseScreen";
import SurveyScreen from "./screens/SurveyScreen";
import InviteScreen from "./screens/InviteScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Index = () => {
  const userToken = useSelector(state => state.userSlice.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const userTokenStorage = await AsyncStorage.getItem('yorchFinancialUser');
      dispatch(userActions.setUser(userTokenStorage));
      setIsLoading(false);
    }

    fetchUser();
  }, [userToken]);

  if(isLoading) return <ModalScreen />

  const TabNavigatorNavigation = () => {
    return(
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
    )
  }

  if(userToken) return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DashboardTabNavigation">
        <Stack.Screen name="DashboardTabNavigation" component={TabNavigatorNavigation} options={{headerShown: false}} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="SurveyScreen" component={SurveyScreen} />
        <Stack.Screen name="InviteScreen" component={InviteScreen} />
        <Stack.Screen name="NewIncomeScreen" component={NewIncomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={stackOptions}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index;
