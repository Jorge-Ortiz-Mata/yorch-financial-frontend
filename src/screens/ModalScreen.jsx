import { Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ModalScreen = () => {

  return(
    <>
      <MaterialCommunityIcons name="finance" size={100} color="white" />
      <Text className="text-white font-black text-4xl mt-5">Yorch Financial</Text>
      <Text className="text-white font-semibold my-1 text-lg">El control de tus ingresos y gastos</Text>
    </>
  )
}

export default ModalScreen;
