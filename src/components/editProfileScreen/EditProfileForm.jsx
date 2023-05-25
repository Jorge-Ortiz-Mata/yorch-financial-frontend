import { useState } from "react";
import { View, ScrollView } from "react-native";

import CustomTextInput from "../common/CustomTextInput";
import CustomTextLabel from "../common/CustomTextLabel";
import CustomButton from "../common/CustomButton";
import CustomImagePicker from "../common/CustomImagePicker";
import CustomDatePicker from "../common/CustomDatePicker";
import CustomSelectInput from "../common/CustomSelectInput";
import CustomTextArea from "../common/CustomTextArea";

const initialState = {
  name: '',
  job_title: '',
  summary: '',
  paternal_surname: '',
  maternal_surname: '',
  sex: '',
  date_of_birth: '',
  avatar: '',
}

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
    <ScrollView className="w-full">
      <View className="mx-5">

        <View className="items-center my-5">
          <CustomImagePicker
            name="avatar"
            onSelectImage={handleChange}
          />
        </View>

        <CustomTextLabel title="Nombre(s)" />
        <CustomTextInput
          name="name"
          value={formParams.name}
          placeholder="José Luis"
          secureTextEntry={false}
          onChange={handleChange}
        />

        <CustomTextLabel title="Puesto actual" />
        <CustomTextInput
          name="job_title"
          value={formParams.job_title}
          placeholder="Ingeniero en robótica"
          secureTextEntry={false}
          onChange={handleChange}
        />

        <CustomTextLabel title="Apellido Paterno" />
        <CustomTextInput
          name="paternal_surname"
          value={formParams.paternal_surname}
          placeholder="Pérez"
          secureTextEntry={false}
          onChange={handleChange}
        />

        <CustomTextLabel title="Apellido Materno" />
        <CustomTextInput
          name="maternal_surname"
          value={formParams.maternal_surname}
          placeholder="López"
          secureTextEntry={false}
          onChange={handleChange}
        />

        <CustomTextLabel title="Sexo" />
        <CustomSelectInput
          name="sex"
          onChange={handleChange}
        />

        <CustomDatePicker
          name="date_of_birth"
          onChange={handleChange}
        />

        <CustomTextLabel title="Acerca de mi" />
        <CustomTextArea
          name="summary"
          value={formParams.summary}
          placeholder="Soy introvertido y me encantan las peliculas de accion. Además..."
          secureTextEntry={false}
          onChange={handleChange}
        />

        <View className="items-center mt-5 mb-10">
          <CustomButton
            title="Actualizar perfil"
            color="green"
            onPress={handleSubmit}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default EditProfileForm;
