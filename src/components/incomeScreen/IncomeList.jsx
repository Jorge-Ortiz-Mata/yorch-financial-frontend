import { FlatList } from "react-native";
import CustomItemCard from "../common/CustomItemCard";

const IncomeList = ({ revenues }) => {

  return(
    <FlatList
      data={revenues}
      renderItem={({item}) => {return <CustomItemCard item={item} />}}
      keyExtractor={item => item.id}
    />
  )
}

export default IncomeList;
