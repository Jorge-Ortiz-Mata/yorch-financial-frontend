import { View, Text } from "react-native";

const CustomScreenTitle = ({ title }) => {

  return(
    <View className="items-center justify-center my-5">
      <Text className="text-white text-4xl font-bold">{title}</Text>
    </View>
  )
}

export default CustomScreenTitle;
