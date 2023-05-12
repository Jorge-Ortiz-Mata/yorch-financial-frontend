import { View, Text } from "react-native";

const IncomeItem = ({item}) => {

  return(
    <View className="my-5 items-center">
      <View className="border border-gray-600 w-5/6 p-4 rounded flex-row justify-between items-center">
        <View>
          <Text className="text-white font-bold">
            {item.name}
          </Text>
          <Text className="text-white font-semibold text-xs mt-2">
            ID: {item.id}
          </Text>
        </View>
        <View>
          <Text className="text-white font-bold">
            ${item.price} MXN
          </Text>
        </View>
      </View>
    </View>
  )
}

export default IncomeItem;
