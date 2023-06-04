import { View, Text } from "react-native"

const CustomTotalMessage = ({title, total, color}) => {
  let totalStyle = "font-bold text-lg ";

  if(color === "red"){
    totalStyle += "text-red-500 ";
  }

  if(color === "green"){
    totalStyle += "text-green-500 ";
  }

  return(
    <View className="flex-col items-center justify-center my-5">
      <Text className="text-white font-semibold text-lg">{title}</Text>
      <Text className={totalStyle}>$ {total} MXN</Text>
    </View>
  )
}

export default CustomTotalMessage;
