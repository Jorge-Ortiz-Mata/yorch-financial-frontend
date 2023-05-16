import { View, Text } from "react-native"

const InviteTitle = () => {

  return(
    <View className="items-center my-5">
      <Text className="text-white font-bold text-3xl">
        Invitar a un amigo
      </Text>
      <Text className="text-white mx-10 text-center my-5">
        Puedes invitar a un amigo o amiga colocando su email en el formulario en la sección inferior.
      </Text>
    </View>
  )

}

export default InviteTitle;
