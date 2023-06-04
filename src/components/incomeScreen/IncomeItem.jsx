import { View, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { deleteUserIncome } from "../../services/revenueService";
import { useDispatch } from "react-redux";
import { booleanActions } from "../../store/booleanSlice";

const IncomeItem = ({item}) => {
  const dispatch = useDispatch();

  const deleteAndUpdateIncome = () => {
    deleteUserIncome(item.id);
    dispatch(booleanActions.updateState());
  }

  const handleOnDelete = () => {
    Alert.alert(`Eliminar: ${item.title}`, "¿Estás seguro de eliminar este ingreso?",[
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancelar')
      },
      {
        text: 'Aceptar',
        onPress: () => deleteAndUpdateIncome()
      }
    ])
  }

  return(
    <View className="border border-gray-600 m-5 p-4 rounded flex-row justify-between items-center">
      <View className="w-6/12 p-1">
        <Text className="text-white font-bold w-11/12">{item.title}</Text>
        <Text className="text-white font-semibold text-xs mt-2">{item.description}</Text>
      </View>
      <View className="w-4/12 p-1">
        <Text className="text-white font-bold text-right">
          ${item.quantity} MXN
        </Text>
      </View>
      <TouchableOpacity onPress={handleOnDelete} className="w-2/12 items-end justify-center p-1">
        <FontAwesome name="trash" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default IncomeItem;
