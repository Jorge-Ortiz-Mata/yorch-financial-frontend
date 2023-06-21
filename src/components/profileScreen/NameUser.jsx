import { View, Text } from "react-native";

const NameUser = ({profile}) => {
  let fullName = '';
  let genre = '';

  if(profile.name){
    fullName += profile.name + ' ';
  }

  if(profile.paternal_name){
    fullName += profile.paternal_name;
  }

  if(profile.sex === "MALE"){
    genre = "Masculino";
  } else {
    genre = "Femenino";
  }

  console.log(profile)

  return(
    <View className="w-full px-5 justify-center items-center my-5">
      <Text className="text-white font-bold text-2xl my-2">{fullName.length > 0 ? fullName : '---'}</Text>
      <Text className="text-white font-semibold text-base">Puest: {profile.job_title ? profile.job_title : '---'}</Text>
      <Text className="text-white font-semibold text-base">Fecha de nacimiento: {profile.date_of_birth ? profile.date_of_birth : '---'}</Text>
      <Text className="text-white font-semibold text-base">Genero: {profile.sex ? genre : '---'}</Text>
    </View>
  )
}

export default NameUser;
