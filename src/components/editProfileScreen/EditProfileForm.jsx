import { View } from "react-native";
import CustomTextInput from "../common/CustomTextInput";
import CustomTextLabel from "../common/CustomTextLabel";
import CustomButton from "../common/CustomButton";
import CustomUserForm from "../common/CustomUserForm";
import { useState } from "react";
import CustomImagePicker from "../common/CustomImagePicker";

const initialState = { name: '', paternal_surname: '', maternal_surname: '', sex: '', date_of_birth: '', avatar: '' }

const EditProfileForm = () => {
  const [formParams, setFormParams] = useState(initialState);

  const handleChange = (name, value) => {
    setFormParams(prevState => (
      {...prevState, [name]: value}
    ))
  }

  const handleSubmit = () => {
    console.log(formParams);
  }

  return(
    <CustomUserForm>
      <View className="items-center my-5">
        <CustomImagePicker
          name="avatar"
          onSelectImage={handleChange}
        />
      </View>
      <>
        <CustomTextLabel title="Nombre(s)" />
        <CustomTextInput
          name="name"
          value={formParams.name}
          placeholder="José Luis"
          secureTextEntry={false}
          onChange={handleChange}
        />
      </>
      <>
        <CustomTextLabel title="Apellido Paterno" />
        <CustomTextInput
          name="paternal_surname"
          value={formParams.paternal_surname}
          placeholder="Pérez"
          secureTextEntry={false}
          onChange={handleChange}
        />
      </>
      <>
        <CustomTextLabel title="Apellido Materno" />
        <CustomTextInput
          name="maternal_surname"
          value={formParams.maternal_surname}
          placeholder="López"
          secureTextEntry={false}
          onChange={handleChange}
        />
      </>
      <>
        <CustomTextLabel title="Sexo" />
      </>
      <>
        <CustomTextLabel title="Fecha de nacimiento" />
      </>
      <View className="items-center">
        <CustomButton
          title="Actualizar perfil"
          color="green"
          onPress={handleSubmit}
        />
      </View>
    </CustomUserForm>
  )
}

export default EditProfileForm;