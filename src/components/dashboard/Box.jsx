import { View, Text } from "react-native";

const Box = ({icon, value, description, color}) => {
  let boxStyle;

  if(color === "cyan"){
    boxStyle = "bg-cyan-200 rounded-xl py-5 px-8 items-center justify-center";
  }

  if(color === "green"){
    boxStyle = "bg-green-200 rounded-xl py-5 px-8 items-center justify-center";
  }

  if(color === "red"){
    boxStyle = "bg-red-200 rounded-xl py-5 px-8 items-center justify-center";
  }

  if(color === "purple"){
    boxStyle = "bg-purple-100 rounded-xl py-5 px-8 items-center justify-center";
  }

  return(
    <View className={boxStyle}>
      {icon}
      <Text className="text-black font-black text-lg mt-2">{value}</Text>
      <Text className="text-black font-semibold mt-0">{description}</Text>
    </View>
  )
}

export default Box;
