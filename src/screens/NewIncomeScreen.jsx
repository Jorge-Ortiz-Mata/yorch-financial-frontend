import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

import NewIncomeForm from '../components/newIncomeScreen/NewIncomeForm';

const NewIncomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Añadir ingreso',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: "#000000" },
    });
  }, []);

  return(
    <View className="flex-1">
      <ScrollView>
        <LinearGradient colors={['#000000', '#212A3E']} className="h-screen items-center py-10">
          <NewIncomeForm />
          <StatusBar style="light" />
        </LinearGradient>
      </ScrollView>
    </View>
  )
}

export default NewIncomeScreen;
