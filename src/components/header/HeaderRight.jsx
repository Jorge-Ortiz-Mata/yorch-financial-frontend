import { Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

const HeaderRight = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
          const response = await AsyncStorage.getItem('yorchFinancialUser');
          setUserName(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, [])

  return <Text className="text-white mr-5 font-semibold text-base">{userName}</Text>
}

export default HeaderRight;
