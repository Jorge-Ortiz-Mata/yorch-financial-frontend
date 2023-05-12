import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({title, color, onPress}) => {
  let btnClass;

  if(color === 'red') btnClass = 'bg-red-600 py-2 px-5 rounded';
  if(color === 'green') btnClass = 'bg-green-600 py-2 px-5 rounded';
  if(color === 'orange') btnClass = 'bg-orange-600 py-2 px-5 rounded';
  if(color === 'sky') btnClass = 'bg-sky-600 py-2 px-5 rounded';

  const handleOnPress = () => {
    onPress();
  }

  return(
    <TouchableOpacity
      className={btnClass}
      onPress={handleOnPress}
    >
      <Text className="text-white font-bold text-sm">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;
