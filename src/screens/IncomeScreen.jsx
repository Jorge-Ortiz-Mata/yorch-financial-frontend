import { FlatList } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import IncomeScreenHeader from '../components/incomeScreen/IncomeScreenHeader';
import IncomeItem from "../components/incomeScreen/IncomeItem";
import IncomeScreenFooter from "../components/incomeScreen/IncomeScreenFooter";
import { incomesData } from '../store/dummyData';

const IncomeScreen = () => {

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1">
      <FlatList
        ListHeaderComponent={<IncomeScreenHeader />}
        data={incomesData}
        renderItem={({item}) => {return <IncomeItem item={item} />}}
        keyExtractor={item => item.id}
        ListFooterComponent={<IncomeScreenFooter />}
      />
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default IncomeScreen;
