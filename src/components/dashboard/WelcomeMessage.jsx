import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WelcomeMessage = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      const authToken = await AsyncStorage.getItem('yorchFinancialUser');
      setUser(jwtDecode(authToken).email);
    }

    fetchUser();
  }, [])


  return(
    <View className="mx-5">
      <Text className="text-white font-bold text-xl">Hola: {user}</Text>
      <Text className="text-white font-medium text-base">Tus ingresos y gastos</Text>
    </View>
  )
}

export default WelcomeMessage;
