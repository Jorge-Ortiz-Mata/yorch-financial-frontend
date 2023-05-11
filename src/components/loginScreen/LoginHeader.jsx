import { View, Text, Image } from "react-native";

const LoginHeader = () => {

  return(
    <View className="items-center mt-28">
      <Image source={require("../../../assets/LogoYorchFinance.png")} className="w-20 h-20" />
      <Text className="text-white font-black text-4xl mt-2">Yorch Financial</Text>
      <Text className="text-white font-bold mt-4 text-xl">¡Hola!</Text>
      <Text className="text-white font-semibold mb-4">Inicia sesión para continuar.</Text>
    </View>
  )
}

export default LoginHeader;
