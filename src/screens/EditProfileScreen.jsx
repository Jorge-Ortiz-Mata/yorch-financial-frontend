import { useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

import EditProfileForm from "../components/editProfileScreen/EditProfileForm";

const EditProfileScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Editar Perfil',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: "#000000" },
    });
  }, []);

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 items-center">
      <EditProfileForm />
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default EditProfileScreen;
