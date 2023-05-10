import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const WelcomeMessage = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      try{
        const response = await AsyncStorage.getItem('yorchFinancialUser');
        setUser(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, [])

  return(
    <View className="mx-5">
      <Text className="text-white font-semibold text-4xl">Hola: {user}</Text>
      <Text className="text-white font-medium text-lg">Tus ingresos y gastos</Text>
    </View>
  )
}

export default WelcomeMessage;
