import { useState } from "react";
import { View, Alert } from "react-native";

import { loginFormValidation } from "../../validations/formValidation";

import CustomUserForm from "../common/CustomUserForm";
import CustomTextLabel from "../common/CustomTextLabel";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";

const initialParams = { email: '', password: '' };

const LoginForm = () => {
  const [formParams, setFormParams] = useState(initialParams);

  const handleOnChange = (name, value) => {
    setFormParams(prevState => (
      { ...prevState, [name]: value }
    ))
  }

  const handleFormSubmit = async () => {
    try {
      const response = await loginFormValidation(formParams);
      if(response?.error) return Alert.alert(response.title, response.message, [{text: 'Accept', style: 'cancel'}])

    } catch (error) {
      console.log(error);
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
