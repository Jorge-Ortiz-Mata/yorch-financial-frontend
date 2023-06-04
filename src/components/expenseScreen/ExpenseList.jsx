import { Alert } from "react-native";
import { FlatList } from "react-native";
import { useDispatch } from "react-redux";

import { deleteUserExpense } from "../../services/expenseService";
import { booleanActions } from "../../store/booleanSlice";
import CustomItemCard from "../common/CustomItemCard";

const ExpenseList = ({ expenses }) => {
  const dispatch = useDispatch();

  const deleteAndUpdateIncome = async (id) => {
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
        onPress: async () => deleteAndUpdateIncome(item.id)
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
