import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { getUserIncome } from "../services/revenueService";
import CustomLoadingLabel from "../components/common/CustomLoadingLabel";
import IncomeScreenBody from "../components/incomeScreen";

const IncomeScreen = () => {
  const booleanState = useSelector(state => state.booleanSlice.booleanState);
  const [revenues, setRevenues] = useState({});
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchIncome = async () => {
      setIsLoading(true);

      try {
        const response = await getUserIncome();
        setRevenues(response.data.revenues);
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
        ? <CustomLoadingLabel title="Obteniendo ingresos" />
        : <IncomeScreenBody revenues={revenues} total={total} />
      }
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default IncomeScreen;
