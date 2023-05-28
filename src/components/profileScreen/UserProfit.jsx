import { View } from "react-native";
import UserProfitBox from "./UserProfitBox";

const UserProfit = () => {

  return(
    <View className="flex-row w-full items-center justify-evenly my-10">
      <UserProfitBox
        title="Ingresos"
        number="252.96"
      />
      <UserProfitBox
        title="Gastos"
        number="81.27"
      />
    </View>
  )
}

export default UserProfit;
