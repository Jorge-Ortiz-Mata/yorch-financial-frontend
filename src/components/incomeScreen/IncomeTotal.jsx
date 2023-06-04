import { Text, View } from "react-native"

const IncomeTotal = ({total}) => {

  return(
    <View className="flex flex-col my-3 justify-center items-center">
      <View className="flex-row items-center">
        <Text className="text-white font-semibold text-base">Mis ganancias totales:</Text>
        <Text className="text-green-400 font-semibold text-base ml-3"> $ {total} MXN</Text>
      </View>
    </View>
  )
}

export default IncomeTotal;
