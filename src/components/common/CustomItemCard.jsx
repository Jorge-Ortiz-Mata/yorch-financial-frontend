import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const CustomItemCard = ({ item, onPress }) => {

  const handleOnPress = () => {
    onPress(item);
  }

  return(
    <View className="border border-gray-600 m-5 p-4 rounded flex-row justify-between items-center">
      <View className="w-6/12 p-1">
        <Text className="text-white font-bold w-11/12">{item?.title}</Text>
        <Text className="text-white font-semibold text-xs mt-2">{item?.description}</Text>
      </View>
      <View className="w-4/12 p-1">
        <Text className="text-white font-bold text-right">
          ${item?.quantity} MXN
        </Text>
      </View>
      <TouchableOpacity onPress={handleOnPress} className="w-2/12 items-end justify-center p-1">
        <FontAwesome name="trash" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default CustomItemCard;
