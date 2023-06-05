import { Alert, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { deleteUserIncome } from "../../services/revenueService";
import { booleanActions } from "../../store/booleanSlice";
import CustomItemCard from "../common/CustomItemCard";

const IncomeList = ({ revenues }) => {
  const dispatch = useDispatch();

  const deleteAndUpdateIncome = async (id) => {
    await deleteUserIncome(id);
    dispatch(booleanActions.updateState());
  }

  const handleOnDeleteExpense = (item) => {
    Alert.alert(`Eliminar: ${item.title}`, "¿Estás seguro de eliminar este ingreso?", [
      {
        text: 'Cancelar',
        onPress: () => {}
      },
      {
        text: 'Aceptar',
        onPress: async () => deleteAndUpdateIncome(item.id)
      }
    ]);
  }

  return(
    <FlatList
      data={revenues}
      renderItem={({item}) => {return <CustomItemCard item={item} onPress={handleOnDeleteExpense} />}}
      keyExtractor={item => item.id}
    />
  )
}

export default IncomeList;
