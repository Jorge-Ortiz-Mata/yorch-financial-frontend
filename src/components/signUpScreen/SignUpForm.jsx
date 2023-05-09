import { useState } from "react";
import { View, Alert } from "react-native"

import { signUpFormValidation } from "../../validations/formValidation";

import CustomUserForm from "../common/CustomUserForm";
import CustomTextLabel from "../common/CustomTextLabel";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";

const initialParams = { email: '', password: '', password_confirmation: '' };

const SignUpForm = () => {
  const [formParams, setFormParams] = useState(initialParams);

  const handleOnChange = (name, value) => {
    setFormParams(prevState => (
      { ...prevState, [name]: value }
    ))
  }

  const handleFormSubmit = async () => {
    try {
      const response = await signUpFormValidation(formParams);
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
