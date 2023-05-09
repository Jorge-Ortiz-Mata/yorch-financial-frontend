import { View, Text } from "react-native"
import CustomButton from "../common/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignUpFooter = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('LoginScreen');
  }

  return(
    <View className="mt-5 items-center justify-center">
      <Text className="text-white mb-2">¿Ya cuentas con una cuenta?</Text>
      <CustomButton
        title="Iniciar sesion"
        color="orange"
        onPress={handlePress}
      />
    </View>
  )
}

export default SignUpFooter;
