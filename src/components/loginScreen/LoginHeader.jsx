import { View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginHeader = () => {

  return(
    <View className="items-center my-5">
      <MaterialCommunityIcons name="finance" size={80} color="white" />
      <Text className="text-white font-black text-3xl mt-5">Yorch Financial</Text>
      <Text className="text-white font-semibold my-1 text-lg">Login</Text>
    </View>
  )
}

export default LoginHeader;
