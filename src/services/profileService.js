import axios from "axios";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { YORCH_FINANCIAL_BACKEND_URL } from '@env';

const getAuthToken = async () => {
  const authToken = await AsyncStorage.getItem('yorchFinancialUser');
  return { authToken: authToken, id: jwtDecode(authToken).id }
}

export const getProfile = async () => {
  const { authToken, id } = await getAuthToken();

  return await axios.get(`${YORCH_FINANCIAL_BACKEND_URL}/v1/profiles/${id}.json`, {
    headers: {
      "Authorization": authToken,
    }
  });
}

export const saveProfile = async (profileParams) => {
  const { authToken, id } = await getAuthToken();

  return await axios.patch(`${YORCH_FINANCIAL_BACKEND_URL}/v1/profiles/${id}`, profileParams, {
    headers: {
      "Authorization": authToken,
      "Content-Type": "multipart/form-data",
    }
  });
}

export const uploadAvatar = async (data) => {
  const { authToken, id } = await getAuthToken();

  return await axios.post(`${YORCH_FINANCIAL_BACKEND_URL}/v1/profiles/${id}/avatar`, data, {
    headers: {
      "Authorization": authToken,
      "Content-Type": "multipart/form-data",
    }
  });
}
