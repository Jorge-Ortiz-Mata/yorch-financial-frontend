import { FlatList, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from "react-redux";

import IncomeScreenButton from "../components/incomeScreen/IncomeScreenButton";
import IncomeItem from "../components/incomeScreen/IncomeItem";
import IncomeScreenCharts from "../components/incomeScreen/IncomeScreenCharts";
import { useEffect, useState } from "react";
import { getUserIncome } from "../services/revenueService";
import CustomLoadingLabel from "../components/common/CustomLoadingLabel";

const IncomeScreen = () => {
  const booleanState = useSelector(state => state.booleanSlice.booleanState);
  const [revenues, setRevenues] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const response = await getUserIncome();
        setRevenues(response.data.revenues);
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
        ? <FlatList
            data={revenues}
            renderItem={({item}) => {return <IncomeItem item={item} />}}
            keyExtractor={item => item.id}
            ListFooterComponent={<IncomeScreenCharts />}
          />
        : <Text className="text-white text-center font-semibold text-lg mt-10">Aún no tienes ingresos guardados.</Text>
      }

      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default IncomeScreen;
