import { View } from "react-native";
import { FontAwesome, FontAwesome5, Feather, Ionicons } from '@expo/vector-icons';

import OptionItem from "./OptionItem";

const OptionsList = () => {

  return(
    <View className="w-full">
      <OptionItem
        name="Editar Perfil"
        icon={<Feather name="settings" size={24} color="white" />}
      />
      <OptionItem
        name="Invitar a un amigo"
        icon={<FontAwesome5 name="users" size={24} color="white" />}
      />
      <OptionItem
        name="Evaluar aplicacion"
        icon={<FontAwesome name="star" size={24} color="white" />}
      />
      <OptionItem
        name="Cerrar sesión"
        icon={<Ionicons name="arrow-back-circle" size={24} color="white" />}
      />
    </View>
  )
}

export default OptionsList;
