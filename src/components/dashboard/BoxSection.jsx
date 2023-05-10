import { View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Box from "./Box";

const BoxSection = () => {

  return(
    <>
      <View className="flex-row items-center justify-evenly mt-16 mb-5">
        <Box
          icon={<Feather name="arrow-up-circle" size={25} color="black" />}
          color="cyan"
          value="25.00 %"
          description="Ingresos"
        />
        <Box
          icon={<Feather name="arrow-down-circle" size={25} color="black" />}
          color="purple"
          value="25.00 %"
          description="Ingresos"
        />
      </View>
      <View className="flex-row items-center justify-evenly my-5">
        <Box
          icon={<AntDesign name="linechart" size={25} color="black" />}
          color="orange"
          value="25.00 %"
          description="Ingresos"
        />
        <Box
          icon={<AntDesign name="piechart" size={25} color="black" />}
          color="red"
          value="25.00 %"
          description="Ingresos"
        />
      </View>
    </>
  )
}

export default BoxSection;
