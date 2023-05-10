import { EvilIcons } from '@expo/vector-icons';
import { View } from 'react-native';

const HeaderRight = () => {
  return(
    <View className="mr-3">
      <EvilIcons name="user" size={40} color="white" />
    </View>
  )
}

export default HeaderRight;
