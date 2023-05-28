import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native';

import HeaderProfile from '../components/profileScreen/HeaderProfile';
import OptionsList from '../components/profileScreen/OptionsList';
import UserProfit from '../components/profileScreen/UserProfit';

const ProfileScreen = () => {

  return(
    <ScrollView>
      <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 items-center px-5 py-10">
        <HeaderProfile />
        <UserProfit />
        <OptionsList />
      </LinearGradient>
    </ScrollView>
  )
}

export default ProfileScreen;
