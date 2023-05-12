import { View } from "react-native";
import CustomButton from "../common/CustomButton";

const ExpenseScreenFooter = () => {

  return(
    <View className="items-center justify-center mt-5 mb-14">
      <CustomButton
        title="Agregar gasto"
        color="orange"
      />
    </View>
  )
}

export default ExpenseScreenFooter;
