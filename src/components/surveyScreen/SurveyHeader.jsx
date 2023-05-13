import { Text } from "react-native";

const SurveyHeader = () => {

  return(
    <>
      <Text className="text-white text-center mt-10 text-2xl font-black">
        Tu opinion nos interesa
      </Text>
      <Text className="text-white text-center mt-2 font-semibold mx-10">
        Nos encantaría conocer tu experiencia dentro de la aplicación con la finalidad
        de mejorar tu experiencia durante su uso.
      </Text>
    </>
  )
}

export default SurveyHeader;
