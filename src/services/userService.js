import { YORCH_FINANCIAL_BACKEND_URL } from '@env';
import axios from "axios";

export const dummyData = async () => {
  return await axios.get(`${YORCH_FINANCIAL_BACKEND_URL}/articles/dummy`);
}

export const userSignUp = async (userParams) => {
  return await axios.post(`${YORCH_FINANCIAL_BACKEND_URL}/users`, userParams, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
