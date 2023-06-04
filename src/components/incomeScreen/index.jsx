import { useNavigation } from "@react-navigation/native";

import CustomNoExpensesMessage from "../common/CustomNoItemsMessage";
import CustomScreenHeader from "../common/CustomScreenHeader";
import CustomTotalMessage from "../common/CustomTotalMessage";
import IncomeList from "./IncomeList";

const IncomeScreenBody = ({ revenues, total }) => {
  const navigation = useNavigation();

  const handleOnChangeScreen = () => {
    navigation.navigate("NewIncomeScreen");
  }

  return(
    <>
      <CustomScreenHeader
        screenTitle="Mis ingresos"
        btnTitle="Añadir ingreso"
        onPress={handleOnChangeScreen}
        color="green"
      />
      <CustomTotalMessage
        title="El total de tus ingresos es de:"
        color="green"
        total={total}
      />
      {
        revenues.length > 0
        ? <IncomeList revenues={revenues} />
        : <CustomNoExpensesMessage title="Aún no tienes ingresos guardados." />
      }
    </>
  )
}

export default IncomeScreenBody;
