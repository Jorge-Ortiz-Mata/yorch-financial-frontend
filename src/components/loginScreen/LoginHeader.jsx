import { View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginHeader = () => {

  return(
    <View className="items-center mt-28">
      <MaterialCommunityIcons name="finance" size={80} color="white" />
      <Text className="text-white font-black text-4xl mt-2">Yorch Financial</Text>
      <Text className="text-white font-bold mt-4 text-xl">¡Hola!</Text>
      <Text className="text-white font-semibold mb-4">Inicia sesión para continuar.</Text>
    </View>
  )
}

export default LoginHeader;
