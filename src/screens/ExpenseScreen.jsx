import { FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';

import ExpenseScreenHeader from "../components/expenseScreen/ExpenseScreenHeader";
import ExpenseItem from "../components/expenseScreen/ExpenseItem";
import ExpenseScreenFooter from "../components/expenseScreen/ExpenseScreenFooter";


const ExpenseScreen = () => {

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 justify-center">
      {/* <FlatList
        ListHeaderComponent={<ExpenseScreenHeader />}
        data={expensesData}
        renderItem={({item}) => {return <ExpenseItem item={item} />}}
        keyExtractor={item => item.id}
        ListFooterComponent={<ExpenseScreenFooter />}
      /> */}
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default ExpenseScreen;
