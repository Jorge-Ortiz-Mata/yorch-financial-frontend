import { View, Text } from "react-native"
import CustomButton from "../common/CustomButton";

const LoginFooter = () => {

  const handlePress = () => {
    console.log('Changing screen...')
  }

  return(
    <View className="mt-10 items-center justify-center">
      <Text className="text-white">¿Aún no tienes una cuenta?</Text>
      <Text className="text-white mb-10">Puedes crear una cuenta de manera gratuita aqui.</Text>
      <CustomButton
        title="Crear nueva cuenta"
        color="orange"
        onPress={handlePress}
      />
    </View>
  )
}

export default LoginFooter;
