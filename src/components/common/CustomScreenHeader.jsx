import { View } from "react-native";
import CustomButton from "./CustomButton";
import CustomScreenTitle from "./CustomScreenTitle";

const CustomScreenHeader = ({ screenTitle, btnTitle, onPress, color }) => {

  const handleOnPress = () => {
    onPress();
  }

  return(
    <View className="flex items-center justify-center">
      <CustomScreenTitle title={screenTitle} />
      <CustomButton
        title={btnTitle}
        color={color}
        onPress={handleOnPress}
      />
    </View>
  )
}

export default CustomScreenHeader;
