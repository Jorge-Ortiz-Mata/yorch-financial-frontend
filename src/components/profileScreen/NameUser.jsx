import { View, Text } from "react-native";

const NameUser = () => {

  return(
    <View className="w-3/6 justify-center">
      <Text className="text-white font-bold text-2xl">User name</Text>
      <Text className="text-white font-semibold text-base">Software engineer</Text>
      <Text className="text-white font-semibold text-xs">user@email.com</Text>
    </View>
  )
}

export default NameUser;
