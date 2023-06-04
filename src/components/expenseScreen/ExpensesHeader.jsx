import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../common/CustomButton";
import ExpenseTitle from "./ExpenseTitle";

const ExpensesHeader = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    console.log('...')
  }

  return(
    <View className="flex items-center">
      <ExpenseTitle />
      <CustomButton
        title="Añadir gasto"
        color="red"
        onPress={handleOnPress}
      />
    </View>
  )
}

export default ExpensesHeader;
