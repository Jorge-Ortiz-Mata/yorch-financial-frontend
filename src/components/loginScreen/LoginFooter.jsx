import { View, Text } from "react-native"
import CustomButton from "../common/CustomButton";
import { useNavigation } from "@react-navigation/native";

const LoginFooter = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SignUpScreen');
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
