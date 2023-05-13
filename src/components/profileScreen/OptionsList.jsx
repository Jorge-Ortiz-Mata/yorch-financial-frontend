import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, Feather, Ionicons } from '@expo/vector-icons';

import OptionItem from "./OptionItem";

const OptionsList = () => {
  const navigation = useNavigation();

  return(
    <View className="w-full">
      <OptionItem
        name="Editar Perfil"
        color="blue"
        icon={<Feather name="settings" size={24} color="blue" />}
        onPressOption={() => navigation.navigate('EditProfileScreen')}
      />
      <OptionItem
        name="Invitar a un amigo"
        color="green"
        icon={<FontAwesome5 name="users" size={24} color="green" />}
        onPressOption={() => {}}
      />
      <OptionItem
        name="Evaluar aplicacion"
        color="yellow"
        icon={<FontAwesome name="star" size={24} color="yellow" />}
        onPressOption={() => navigation.navigate('SurveyScreen')}
      />
      <OptionItem
        name="Cerrar sesión"
        color="red"
        icon={<Ionicons name="arrow-back-circle" size={24} color="red" />}
        onPressOption={() => {}}
      />
    </View>
  )
}

export default OptionsList;
