import { View, Text } from "react-native";
import AvatarUser from "./AvatarUser";
import NameUser from "./NameUser";
import { useSelector } from "react-redux";
import ProfileSummary from "./ProfileSummary";

const HeaderProfile = () => {
  const profile = useSelector(state => state.profileSlice.profile);

  return(
    <View className="w-full items-center justify-center">
      <AvatarUser />
      <NameUser profile={profile} />
      <ProfileSummary summary={profile.summary} />
    </View>
  )
}

export default HeaderProfile;
