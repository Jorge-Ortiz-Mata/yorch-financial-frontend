import IncomeScreenTitle from "./IncomeScreenTitle";
import IncomeLineChart from "./IncomeLineChart";
import { xMonthValuesChart, yMonthValuesChart, xDayValuesChart, yDayValuesChart,  } from "../../store/dummyData";

const IncomeScreenHeader = () => {

  return(
    <>
      <IncomeScreenTitle />
      <IncomeLineChart
        title="Ingresos de los ultimos 5 meses"
        xValues={xMonthValuesChart}
        yValues={yMonthValuesChart}
      />
      <IncomeLineChart
        title="Ingresos de los ultimos 5 dias"
        xValues={xDayValuesChart}
        yValues={yDayValuesChart}
      />
    </>
  )
}

export default IncomeScreenHeader;
