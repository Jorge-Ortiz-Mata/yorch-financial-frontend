import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from "react-native";

const ProfileScreen = () => {

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 items-center justify-center">


      <Text className="text-white">
        Profile Screen
      </Text>
    </LinearGradient>
  )
}

export default ProfileScreen;
