import { View } from "react-native";
import CustomButton from "../common/CustomButton";

const IncomeScreenFooter = () => {

  return(
    <View className="items-center justify-center mt-5 mb-14">
      <CustomButton
        title="Agregar ingreso"
        color="green"
      />
    </View>
  )
}

export default IncomeScreenFooter;
