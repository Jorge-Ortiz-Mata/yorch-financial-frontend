import { View, Text, ActivityIndicator } from "react-native"

const CustomLoadingLabel = ({title}) => {

  return(
    <View className="mt-10">
      <Text className="text-white font-bold text-center mb-5 text-2xl">
        {title}
      </Text>

      <Text className="text-white font-bold text-center mb-10">
        Esto puede demorar unos segundos. Por favor espere.
      </Text>

      <ActivityIndicator size="large" color="#fff" />
    </View>
  )
}

export default CustomLoadingLabel;
