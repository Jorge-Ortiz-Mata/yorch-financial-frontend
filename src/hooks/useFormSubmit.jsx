import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { createExpense } from "../services/expenseService";
import { createIncome } from "../services/revenueService";
import { booleanActions } from "../store/booleanSlice";

export const useFormSubmit = () => {
  const dispatch = useDispatch();

  const saveExpense = async (item, params, alertTitle, alertDescription) => {
    try {
      const response = await createExpense({[item]: params});
      Alert.alert(alertTitle, alertDescription, [{text: "Accept"}]);
      dispatch(booleanActions.updateState());
      return response;
    } catch (error) {
      return error.response;
    }
  }

  const saveIncome = async (item, params, alertTitle, alertDescription) => {
    try {
      const response = await createIncome({[item]: params});
      Alert.alert(alertTitle, alertDescription, [{text: "Accept"}]);
      dispatch(booleanActions.updateState());
      return response;
    } catch (error) {
      return error.response;
    }
  }

  return {
    saveExpense,
    saveIncome,
  }
}

