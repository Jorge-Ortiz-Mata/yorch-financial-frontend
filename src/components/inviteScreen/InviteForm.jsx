import { useState } from "react";
import { View } from "react-native";
import CustomButton from "../common/CustomButton";
import CustomTextInput from "../common/CustomTextInput";
import CustomTextLabel from "../common/CustomTextLabel";

const InviteForm = () => {
  const [email, setEmail] = useState('');

  const handleOnChange = (name, value) => {
    setEmail(value);
  }

  const handleSubmit = () => {
    console.log(email);
  }

  return(
    <View className="mx-10">
      <CustomTextLabel
        title="Correo electrónico"
      />
      <CustomTextInput
        name="email"
        value={email}
        placeholder="user@email.com"
        secureTextEntry={false}
        onChange={handleOnChange}
      />
      <View className="items-center justify-center my-10">
        <CustomButton
          title="Enviar invitación"
          color="green"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

export default InviteForm;
