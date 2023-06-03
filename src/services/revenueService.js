import axios from "axios";
import jwtDecode from "jwt-decode";
import { YORCH_FINANCIAL_BACKEND_URL } from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";

const getAuthToken = async () => {
  const authToken = await AsyncStorage.getItem('yorchFinancialUser');
  return { authToken: authToken, id: jwtDecode(authToken).id }
}

export const createIncome = async (params) => {
  const { authToken } = await getAuthToken();

  return await axios.post(`${YORCH_FINANCIAL_BACKEND_URL}/v1/revenues`, params, {
    headers: {
      "Authorization": authToken,
    }
  });
}

export const getUserIncome = async () => {
  const { authToken } = await getAuthToken();

  return await axios.get(`${YORCH_FINANCIAL_BACKEND_URL}/v1/revenues/user.json`,{
    headers: {
      "Authorization": authToken
    }
  });
}
