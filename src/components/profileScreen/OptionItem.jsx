import { Text, TouchableOpacity } from "react-native"

const OptionItem = ({name, color, icon, onPressOption}) => {
  let touchablestyle;
  let textStyle;

  if(color === 'blue'){
    touchablestyle = "border border-blue-700 rounded-md p-5 my-2 flex-row items-center";
    textStyle = "text-blue-400 text-base font-bold ml-3";
  }

  if(color === 'green'){
    touchablestyle = "border border-green-700 rounded-md p-5 my-2 flex-row items-center";
    textStyle = "text-green-400 text-base font-bold ml-3";
  }

  if(color === 'yellow'){
    touchablestyle = "border border-yellow-700 rounded-md p-5 my-2 flex-row items-center";
    textStyle = "text-yellow-400 text-base font-bold ml-3";
  }

  if(color === 'red'){
    touchablestyle = "border border-red-700 rounded-md p-5 my-2 flex-row items-center";
    textStyle = "text-red-400 text-base font-bold ml-3";
  }


  const handlePress = () => {
    onPressOption();
  }

  return(
    <TouchableOpacity onPress={handlePress} className={touchablestyle}>
      {icon}
      <Text className={textStyle}>{name}</Text>
    </TouchableOpacity>
  )
}

export default OptionItem;
