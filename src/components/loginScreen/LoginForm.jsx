import { View } from "react-native";
import CustomTextLabel from "../common/CustomTextLabel";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";

const LoginForm = () => {

  return(
    <View className="w-5/6 p-5">
      <View className="flex flex-col">
        <CustomTextLabel
          title="Email:"
        />
        <CustomTextInput
          placeholder='user@email.com'
          secureTextEntry={false}
        />
      </View>
      <View className="flex flex-col">
        <CustomTextLabel
          title="Password:"
        />
        <CustomTextInput
          placeholder='*******'
          secureTextEntry={true}
        />
      </View>
      <View className="items-center">
        <CustomButton
          title="Login"
          color="green"
        />
      </View>
    </View>
  )
}

export default LoginForm;
