import { FlatList, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from "react-redux";

import IncomeScreenButton from "../components/incomeScreen/IncomeScreenButton";
import IncomeItem from "../components/incomeScreen/IncomeItem";
import IncomeScreenCharts from "../components/incomeScreen/IncomeScreenCharts";
import { useEffect, useState } from "react";
import { getUserIncome, getTotalIncome } from "../services/revenueService";
import CustomLoadingLabel from "../components/common/CustomLoadingLabel";
import IncomeTotal from "../components/incomeScreen/IncomeTotal";

const IncomeScreen = () => {
  const booleanState = useSelector(state => state.booleanSlice.booleanState);
  const [revenues, setRevenues] = useState({});
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const response = await getUserIncome();
        setRevenues(response.data.revenues);
        const total = await getTotalIncome();
        setTotal(total.data.total);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchIncome();
  }, [booleanState]);

  if(isLoading) return (
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1">
      <CustomLoadingLabel />
    </LinearGradient>
  )

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1">
      <IncomeScreenButton />
      {
        revenues.length > 0
        ? <>
            <IncomeTotal total={total} />
            <FlatList
              data={revenues}
              renderItem={({item}) => {return <IncomeItem item={item} />}}
              keyExtractor={item => item.id}
              ListFooterComponent={<IncomeScreenCharts />}
            />
        </>
        : <Text className="text-white text-center font-semibold text-lg mt-10">Aún no tienes ingresos guardados.</Text>
      }

      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default IncomeScreen;
