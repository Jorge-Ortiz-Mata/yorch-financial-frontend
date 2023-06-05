import { View, Text } from "react-native";

const NameUser = ({profile}) => {
  let fullName = '';

  if(profile.name){
    fullName += profile.name + ' ';
  }

  if(profile.paternal_name){
    fullName += profile.paternal_name;
  }

  return(
    <View className="w-full px-5 justify-center items-center my-5">
      <Text className="text-white font-bold text-2xl">{fullName.length > 0 ? fullName : '---'}</Text>
      <Text className="text-white font-semibold text-base">{profile.job_title ? profile.job_title : '---'}</Text>
    </View>
  )
}

export default NameUser;
