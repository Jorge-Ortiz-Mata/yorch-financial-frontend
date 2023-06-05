import { Alert, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { deleteUserExpense } from "../../services/expenseService";
import { booleanActions } from "../../store/booleanSlice";
import CustomItemCard from "../common/CustomItemCard";

const ExpenseList = ({ expenses }) => {
  const dispatch = useDispatch();

  const deleteAndUpdateExpense = async (id) => {
    await deleteUserExpense(id);
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
        onPress: async () => deleteAndUpdateExpense(item.id)
      }
    ]);
  }

  return(
    <FlatList
      data={expenses}
      renderItem={({item}) => {
        return <CustomItemCard item={item} onPress={handleOnDeleteExpense} />
      }}
      keyExtractor={item => item.id}
    />
  )
}

export default ExpenseList;
