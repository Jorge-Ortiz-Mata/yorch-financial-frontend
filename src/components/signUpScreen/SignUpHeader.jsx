import { Text, View, Image } from "react-native"

const SignUpHeader = () => {

  return(
    <View className="items-center mt-28">
      <Image source={require("../../../assets/LogoYorchFinance.png")} className="w-20 h-20" />
      <Text className="text-white font-black text-4xl mt-2">Yorch Financial</Text>
      <Text className="text-white font-bold mt-4 text-xl">¡Bienvenido!</Text>
      <Text className="text-white font-semibold mb-4">Crea tu cuenta de manera gratuita.</Text>
    </View>
  )
}

export default SignUpHeader;
