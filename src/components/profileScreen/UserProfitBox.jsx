import { View, Text } from "react-native";

const UserProfitBox = ({title, number}) => {

  return(
    <View className="items-center rounded p-2 w-3/6 mx-1">
      <Text className="text-white text-lg font-bold">${number} USD</Text>
      <Text className="text-white text-sm font-semibold">{title}</Text>
    </View>
  )
}

export default UserProfitBox;
