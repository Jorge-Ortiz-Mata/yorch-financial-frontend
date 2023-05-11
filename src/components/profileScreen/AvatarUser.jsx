import { View, Image } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

const AvatarUser = () => {

  return(
    <View className="w-3/6 items-center justify-center">
      <EvilIcons name="user" size={100} color="white" />
    </View>
    )
}

export default AvatarUser;
