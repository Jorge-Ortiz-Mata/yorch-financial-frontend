import axios from "axios";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { YORCH_FINANCIAL_BACKEND_URL } from '@env';


export const getProfile = async () => {
  const authToken = await AsyncStorage.getItem('yorchFinancialUser');
  const id = jwtDecode(authToken).id;
  return await axios.get(`${YORCH_FINANCIAL_BACKEND_URL}/v1/profiles/${id}.json`, {
    headers: {
      "Authorization": authToken,
    }
  });
}
