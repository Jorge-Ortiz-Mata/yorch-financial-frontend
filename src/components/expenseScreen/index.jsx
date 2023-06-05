import { useNavigation } from "@react-navigation/native";
import ExpenseList from "./ExpenseList";
import CustomTotalMessage from "../common/CustomTotalMessage";
import CustomNoExpensesMessage from "../common/CustomNoItemsMessage";
import CustomScreenHeader from "../common/CustomScreenHeader";

const ExpenseScreenBody = ({expenses, total}) => {
  const navigation = useNavigation();

  const handleOnChangeScreen = () => {
    navigation.navigate("NewExpenseScreen");
  }

  return(
    <>
      <CustomScreenHeader
        screenTitle="Mis gastos"
        btnTitle="Añadir gasto"
        onPress={handleOnChangeScreen}
        color="red"
      />
      <CustomTotalMessage
        title="El total de tus gastos es de:"
        color="red"
        total={total}
      />
      {
        expenses.length > 0
        ? <ExpenseList expenses={expenses} />
        : <CustomNoExpensesMessage title="Aún no tienes gastos guardados." />
      }
    </>
  )
}

export default ExpenseScreenBody;
