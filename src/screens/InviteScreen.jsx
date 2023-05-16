import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';

import InviteTitle from "../components/inviteScreen/InviteTitle";
import InviteForm from "../components/inviteScreen/InviteForm";

const InviteScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Invitar a un amigo',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: "#000000" },
    });
  }, []);

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 justify-center">
      <InviteTitle />
      <InviteForm />
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default InviteScreen;
