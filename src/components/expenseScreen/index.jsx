import ExpenseList from "./ExpenseList";
import NoExpensesMessage from "./NoExpensesMessage";
import ExpensesHeader from "./ExpensesHeader";
import CustomTotalMessage from "../common/CustomTotalMessage";

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
        : <NoExpensesMessage />
      }
    </>
  )
}

export default ExpenseScreenBody;
