import axios from "axios";
import jwtDecode from "jwt-decode";
import { YORCH_FINANCIAL_BACKEND_URL } from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";

const getAuthToken = async () => {
  const authToken = await AsyncStorage.getItem('yorchFinancialUser');
  return { authToken: authToken, id: jwtDecode(authToken).id }
}

export const createExpense = async (params) => {
  const { authToken } = await getAuthToken();

  return await axios.post(`${YORCH_FINANCIAL_BACKEND_URL}/v1/expenses`, params, {
    headers: {
      "Authorization": authToken,
    }
  });
}

export const getUserExpense = async () => {
  const { authToken } = await getAuthToken();

  return await axios.get(`${YORCH_FINANCIAL_BACKEND_URL}/v1/expenses/user.json`, {
    headers: {
      "Authorization": authToken
    }
  });
}

export const deleteUserExpense = async (id) => {
  const { authToken } = await getAuthToken();

  return await axios.delete(`${YORCH_FINANCIAL_BACKEND_URL}/v1/expenses/${id}`, {
    headers: {
      "Authorization": authToken
    }
  });
}
