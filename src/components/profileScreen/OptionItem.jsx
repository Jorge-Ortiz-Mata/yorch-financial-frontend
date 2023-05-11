import { Text, TouchableOpacity } from "react-native"

const OptionItem = ({name, icon, onPressOption}) => {

  const handlePress = () => {
    // onPressOption();
    console.log('Hello World...')
  }

  return(
    <TouchableOpacity
      onPress={handlePress}
      className="border border-gray-700 rounded-md p-5 my-1 flex-row items-center"
    >
      {icon}
      <Text className="text-white text-base font-bold ml-3">{name}</Text>
    </TouchableOpacity>
  )
}

export default OptionItem;
