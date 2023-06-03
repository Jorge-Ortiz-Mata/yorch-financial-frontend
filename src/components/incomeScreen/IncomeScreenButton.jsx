import { View } from "react-native";
import CustomButton from "../common/CustomButton";
import IncomeScreenTitle from "./IncomeScreenTitle";
import { useNavigation } from "@react-navigation/native";

const IncomeScreenButton = () => {
  const navigation = useNavigation()

  const handleOnPress = () => {
    navigation.navigate('NewIncomeScreen')
  }

  return(
    <View className="items-center justify-center mt-5">
      <IncomeScreenTitle />
      <CustomButton
        title="Agregar ingreso"
        color="green"
        onPress={handleOnPress}
      />
    </View>
  )
}

export default IncomeScreenButton;
