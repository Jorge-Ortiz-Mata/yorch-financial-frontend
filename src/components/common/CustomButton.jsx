import { Pressable, Text } from "react-native";

const CustomButton = ({title, color}) => {
  let btnClass;

  if(color === 'red') btnClass = 'bg-red-600 p-2 rounded';
  if(color === 'green') btnClass = 'bg-green-600 p-2 rounded';

  return(
    <Pressable
      className={btnClass}
    >
      <Text className="text-white font-bold text-sm">{title}</Text>
    </Pressable>
  )
}

export default CustomButton;
