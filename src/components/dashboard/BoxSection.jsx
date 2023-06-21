import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { getUserIncome } from "../../services/revenueService";
import { getUserExpense } from "../../services/expenseService";

import Box from "./Box";

const BoxSection = () => {
  const booleanState = useSelector(state => state.booleanSlice.booleanState);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpenses] = useState(0);

  useEffect(() => {
    const fetchIncome = async () => {

      try {
        const responseIncome = await getUserIncome();
        setTotalIncome(responseIncome.data.total);

        const responseExpense = await getUserExpense();
        setTotalExpenses(responseExpense.data.total);
      } catch (error) {
        console.log(error);
      }
    }

    fetchIncome();
  }, [booleanState]);

  return(
    <>
      <View className="flex-row items-center justify-center mt-20">
        <Box
          icon={<AntDesign name="linechart" size={25} color="black" />}
          color="cyan"
          value={`$${totalIncome - totalExpense} MXN`}
          description="Ganancia"
        />
      </View>
      <View className="flex-row items-center justify-evenly my-5">
        <Box
          icon={<Feather name="arrow-up-circle" size={25} color="black" />}
          color="green"
          value={`$${totalIncome} MXN`}
          description="Ingresos totales"
        />
        <Box
          icon={<Feather name="arrow-down-circle" size={25} color="black" />}
          color="red"
          value={`$${totalExpense} MXN`}
          description="Gastos totales"
        />
      </View>
    </>
  )
}

export default BoxSection;
