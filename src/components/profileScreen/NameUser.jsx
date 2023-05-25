import { View, Text } from "react-native";

const NameUser = ({profile}) => {

  return(
    <View className="w-3/6 justify-center">
      <Text className="text-white font-bold text-2xl">{profile.name + ' ' + profile.paternal_name}</Text>
      <Text className="text-white font-semibold text-base">{profile.job_title}</Text>
      <Text className="text-white font-semibold text-xs">{profile.email}</Text>
    </View>
  )
}

export default NameUser;
