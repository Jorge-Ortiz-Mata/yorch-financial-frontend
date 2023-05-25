import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { YORCH_FINANCIAL_BACKEND_URL } from '@env';

export const dummyData = async () => {
  return await axios.get(`${YORCH_FINANCIAL_BACKEND_URL}/v1/articles/dummy`);
}

export const userSignUp = async (userParams) => {
  return await axios.post(`${YORCH_FINANCIAL_BACKEND_URL}/v1/users`, userParams, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const userLogIn = async (userParams) => {
  return await axios.post(`${YORCH_FINANCIAL_BACKEND_URL}/login`, userParams, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const userLogOut = async () => {
  const userToken = await AsyncStorage.getItem('yorchFinancialUser');

  return await axios.delete(`${YORCH_FINANCIAL_BACKEND_URL}/logout`, {
    headers: {
      "Authorization": userToken
    }
  });
}
