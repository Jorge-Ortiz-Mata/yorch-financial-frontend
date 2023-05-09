import { Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SignUpHeader = () => {

  return(
    <View className="items-center mt-28">
      <MaterialCommunityIcons name="finance" size={80} color="white" />
      <Text className="text-white font-black text-4xl mt-2">Yorch Financial</Text>
      <Text className="text-white font-bold mt-4 text-xl">¡Bienvenido!</Text>
      <Text className="text-white font-semibold mb-4">Crea tu cuenta de manera gratuita.</Text>
    </View>
  )
}

export default SignUpHeader;
