import { View, Text } from "react-native";
import AvatarUser from "./AvatarUser";
import NameUser from "./NameUser";

const HeaderProfile = () => {

  return(
    <View className="w-full">
      <View className="flex-row w-full my-5">
        <AvatarUser />
        <NameUser />
      </View>
      <Text className="text-white text-center">
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias.
      </Text>
    </View>
  )
}

export default HeaderProfile;
