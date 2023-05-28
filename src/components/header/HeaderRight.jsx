import { useSelector } from 'react-redux';
import { View, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const HeaderRight = () => {
  const profileAvatar = useSelector(state => state.profileSlice.profileAvatar);

  return(
    <View className="mr-3">
      {
        profileAvatar?.length > 0
        ? <Image source={{ uri: profileAvatar }} className="w-10 h-10 rounded-full" />
        : <EvilIcons name="user" size={40} color="white" />
      }
    </View>
  )
}

export default HeaderRight;
