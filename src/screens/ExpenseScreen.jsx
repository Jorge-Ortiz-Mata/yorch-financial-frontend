import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';

import { getUserExpense } from "../services/expenseService";
import CustomLoadingLabel from "../components/common/CustomLoadingLabel";
import ExpenseScreenBody from "../components/expenseScreen";

const ExpenseScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const booleanState = useSelector(state => state.booleanSlice.booleanState);
  const [expenses, setExpenes] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const response = await getUserExpense();
        setExpenes(response.data.expenses);
        setTotal(response.data.total);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchIncome();
  }, [booleanState]);

  return (
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1">
      {
        isLoading
        ? <CustomLoadingLabel title="Obteniendo gastos" />
        : <ExpenseScreenBody expenses={expenses} total={total} />
      }
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default ExpenseScreen;
