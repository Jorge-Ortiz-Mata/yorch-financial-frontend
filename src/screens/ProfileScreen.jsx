import { LinearGradient } from 'expo-linear-gradient';
import HeaderProfile from '../components/profileScreen/HeaderProfile';
import OptionsList from '../components/profileScreen/OptionsList';
import UserProfit from '../components/profileScreen/UserProfit';

const ProfileScreen = () => {

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 items-center p-5">
      <HeaderProfile />
      <UserProfit />
      <OptionsList />
    </LinearGradient>
  )
}

export default ProfileScreen;
