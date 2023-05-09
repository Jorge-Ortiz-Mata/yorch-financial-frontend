import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ModalScreen = () => {

  return(
      <LinearGradient
        colors={['#000000', '#212A3E']}
        className="flex-1 items-center justify-center"
      >
        <MaterialCommunityIcons name="finance" size={100} color="white" />
        <Text className="text-white font-black text-4xl mt-5">Yorch Financial</Text>
        <Text className="text-white font-semibold my-1 text-lg">El control de tus ingresos y gastos</Text>
        <StatusBar style="light" />
      </LinearGradient>
  )
}

export default ModalScreen;
