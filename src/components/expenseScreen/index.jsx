import ExpenseList from "./ExpenseList";
import ExpensesHeader from "./ExpensesHeader";
import CustomTotalMessage from "../common/CustomTotalMessage";
import CustomNoExpensesMessage from "../common/CustomNoItemsMessage";

const ExpenseScreenBody = ({expenses, total}) => {

  return(
    <>
      <ExpensesHeader />
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
