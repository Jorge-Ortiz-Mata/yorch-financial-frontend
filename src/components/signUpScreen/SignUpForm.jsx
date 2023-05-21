import { useState } from "react";
import { View, Alert } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomUserForm from "../common/CustomUserForm";
import CustomTextLabel from "../common/CustomTextLabel";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";

import { signUpFormValidation } from "../../validations/formValidation";
import { userSignUp } from "../../services/userService";

const initialParams = { email: '', password: '', password_confirmation: '' };

const SignUpForm = () => {
  const [formParams, setFormParams] = useState(initialParams);
  const handleOnChange = (name, value) => {
    setFormParams(prevState => (
      { ...prevState, [name]: value }
    ));
  }

  const handleFormSubmit = async () => {
    try {
      const responseValidation = await signUpFormValidation(formParams);
      if(responseValidation?.error) return Alert.alert(responseValidation.title, responseValidation.message, [{text: 'Accept', style: 'cancel'}])

      const response = await userSignUp({user: formParams});
      await AsyncStorage.setItem('yorchFinancialUser', response?.data?.auth_token);

    } catch (error) {
      const { errors } = error.response.data;
      console.log(errors);
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
          title="Password:"
        />
        <CustomTextInput
          placeholder='* * * * * * *'
          secureTextEntry={true}
          name="password"
          onChange={handleOnChange}
          value={formParams.password}
        />
      </View>
      <View className="flex flex-col">
        <CustomTextLabel
          title="Password Confirmation:"
        />
        <CustomTextInput
          placeholder='* * * * * * *'
          secureTextEntry={true}
          name="password_confirmation"
          onChange={handleOnChange}
          value={formParams.password_confirmation}
        />
      </View>
      <View className="items-center mt-5">
        <CustomButton
          title="Registrarme"
          color="green"
          onPress={handleFormSubmit}
        />
      </View>
    </CustomUserForm>
  )
}

export default SignUpForm;
