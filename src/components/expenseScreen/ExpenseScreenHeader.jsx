import ExpenseScreenTitle from "./ExpenseScreenTitle";
import ExpenseLineChart from "./ExpenseLineChart";
// import { xMonthValuesChart, yMonthValuesChart, xDayValuesChart, yDayValuesChart,  } from "../../store/dummyData";

const ExpenseScreenHeader = () => {

  return(
    <>
      <ExpenseScreenTitle />
      {/* <ExpenseLineChart
        title="Gastos de los ultimos 5 meses"
        xValues={xMonthValuesChart}
        yValues={yMonthValuesChart}
      />
      <ExpenseLineChart
        title="Gastos de los ultimos 5 dias"
        xValues={xDayValuesChart}
        yValues={yDayValuesChart}
      /> */}
    </>
  )
}

export default ExpenseScreenHeader;
