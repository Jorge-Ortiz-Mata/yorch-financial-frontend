import { Text, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const ModalScreen = () => {

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 items-center justify-center">
      <Image source={require("../../assets/LogoYorchFinance.png")} className="w-40 h-40" />
      <Text className="text-white font-black text-4xl mt-5">Yorch Financial</Text>
      <Text className="text-white font-semibold my-1 text-lg">El control de tus ingresos y gastos</Text>
      <Text className="text-white font-semibold my-2 text-xs">Cargando...</Text>
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default ModalScreen;
