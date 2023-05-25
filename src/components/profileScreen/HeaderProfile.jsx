import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getProfile } from "../../services/profileService";
import AvatarUser from "./AvatarUser";
import NameUser from "./NameUser";

const HeaderProfile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProfile();
      setProfile(response?.data);
    }

    fetchData();
  }, []);

  return(
    <View className="w-full">
      <View className="flex-row w-full my-5">
        <AvatarUser />
        <NameUser profile={profile} />
      </View>
      <Text className="text-white text-center">
        {profile.summary}
      </Text>
    </View>
  )
}

export default HeaderProfile;
