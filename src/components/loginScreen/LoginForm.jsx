import { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { userLogIn } from "../../services/userService";
import { loginFormValidation } from "../../validations/formValidation";
import { userActions } from "../../store/userSlice";

import CustomUserForm from "../common/CustomUserForm";
import CustomTextLabel from "../common/CustomTextLabel";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";

const initialParams = { email: '', password: '' };

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formParams, setFormParams] = useState(initialParams);

  const handleOnChange = (name, value) => {
    setFormParams(prevState => (
      { ...prevState, [name]: value }
    ))
  }

  const handleFormSubmit = async () => {
    try {
      const responseValidation = await loginFormValidation(formParams);
      if(responseValidation?.error) return Alert.alert(response.title, response.message, [{text: 'Accept', style: 'cancel'}])

      const response = await userLogIn(formParams);
      await AsyncStorage.setItem('yorchFinancialUser', response?.data?.auth_token);
      dispatch(userActions.setUser(response?.data?.auth_token));
    } catch (error) {
      const { errors } = error.response.data;
      Alert.alert('Error del servidor', errors[0], [{text: 'Accept', style: 'cancel'}]);
    }
  }

  return(
    <CustomUserForm>
      <View className="flex flex-col">
        <CustomTextLabel
          title="Email:"
        />
        <CustomTextInput
          placeholder='user@email.com'
          secureTextEntry={false}
          name="email"
          onChange={handleOnChange}
          value={formParams.email}
        />
      </View>
      <View className="flex flex-col">
        <CustomTextLabel
          title="Contraseña:"
        />
        <CustomTextInput
          placeholder='* * * * * * *'
          secureTextEntry={true}
          name="password"
          onChange={handleOnChange}
          value={formParams.password}
        />
      </View>
      <View className="items-center mt-5">
        <CustomButton
          title="Iniciar sesión"
          color="green"
          onPress={handleFormSubmit}
        />
      </View>
    </CustomUserForm>
  )
}

export default LoginForm;
