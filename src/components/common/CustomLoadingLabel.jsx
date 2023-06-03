import { Text, ActivityIndicator } from "react-native"

const CustomLoadingLabel = () => {

  return(
    <>
      <Text className="text-white font-bold text-center mb-5">
        Esto puede demorar unos segundos. Por favor espere.
      </Text>

      <ActivityIndicator size="large" color="#fff" />
    </>
  )
}

export default CustomLoadingLabel;
