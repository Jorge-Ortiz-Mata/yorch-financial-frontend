import { View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, Feather, Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { userActions } from "../../store/userSlice";
import { userLogOut } from "../../services/userService";
import OptionItem from "./OptionItem";

const OptionsList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const closeSession = async () => {
    try {
      await userLogOut();
      await AsyncStorage.removeItem('yorchFinancialUser');
      dispatch(userActions.setUser(null));
    } catch(error) {
      console.log(error.response.data)
    }
  }

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
        onPressOption={() => navigation.navigate('InviteScreen')}
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
        onPressOption={closeSession}
      />
    </View>
  )
}

export default OptionsList;
