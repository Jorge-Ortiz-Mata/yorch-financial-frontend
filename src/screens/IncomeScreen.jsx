import { FlatList, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import IncomeScreenButton from "../components/incomeScreen/IncomeScreenButton";
import IncomeItem from "../components/incomeScreen/IncomeItem";
import { incomesData } from '../store/dummyData';
import IncomeScreenCharts from "../components/incomeScreen/IncomeScreenCharts";

const IncomeScreen = () => {

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1">
      <FlatList
        ListHeaderComponent={<IncomeScreenButton />}
        data={incomesData}
        renderItem={({item}) => {return <IncomeItem item={item} />}}
        keyExtractor={item => item.id}
        ListFooterComponent={<IncomeScreenCharts />}
        />
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default IncomeScreen;
