import { View } from "react-native";
import CustomTextLabel from "../common/CustomTextLabel";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";
import { useState } from "react";

const LoginForm = () => {
  const [formParams, setFormParams] = useState({
    email: '',
    password: ''
  });

  const handleOnChange = (name, value) => {
    setFormParams(prevState => (
      { ...prevState, [name]: value }
    ))
  }

  const handleFormSubmit = () => {
    console.log(formParams);
  }

  return(
    <View className="w-5/6">
      <View className="flex flex-col">
        <CustomTextLabel
          title="Email:"
        />
        <CustomTextInput
          placeholder='user@email.com'
          secureTextEntry={false}
          name="email"
          onChange={handleOnChange}
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
        />
      </View>
      <View className="items-center mt-5">
        <CustomButton
          title="Iniciar sesión"
          color="green"
          onPress={handleFormSubmit}
        />
      </View>
    </View>
  )
}

export default LoginForm;
