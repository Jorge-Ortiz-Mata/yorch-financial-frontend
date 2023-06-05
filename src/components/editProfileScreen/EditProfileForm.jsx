import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView, Alert } from "react-native";

import { profileFormValidation } from "../../validations/formValidation";
import { profileActions } from "../../store/profileSlice";
import { saveProfile } from "../../services/profileService";

import CustomTextInput from "../common/CustomTextInput";
import CustomTextLabel from "../common/CustomTextLabel";
import CustomButton from "../common/CustomButton";
import CustomDatePicker from "../common/CustomDatePicker";
import CustomSelectInput from "../common/CustomSelectInput";
import CustomTextArea from "../common/CustomTextArea";

const EditProfileForm = () => {
  const profile = useSelector(state => state.profileSlice.profile);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [formParams, setFormParams] = useState(profile);

  const handleChange = (name, value) => {
    setFormParams(prevState => (
      {...prevState, [name]: value}
    ))
  }

  const handleSubmit = async () => {
    try {
      const responseValidation = await profileFormValidation(formParams);
      if(responseValidation?.error) return Alert.alert(responseValidation.title, responseValidation.message, [{text: 'Accept', style: 'cancel'}])

      const response = await saveProfile({ profile: formParams });
      dispatch(profileActions.updateProfile(response.data.profile));
      Alert.alert('Perfil actualizado', 'Tu perfil ha sido actualizado correctamente', [{text: 'Accept'}])
      navigation.navigate('DashboardTabNavigation');

    } catch (error) {
      Alert.alert('Error en el servidor', 'Hubo un problema en el servidor, por favor intente más tarde', [{text: 'Accept', style: 'cancel'}])
    }
  }

  return(
    <ScrollView className="w-full px-5">
      <View className="mt-5">
        <CustomTextLabel title="Nombre(s)" />
        <CustomTextInput
          name="name"
          value={formParams.name}
          placeholder="José Luis"
          secureTextEntry={false}
          onChange={handleChange}
        />
      </View>

      <View className="mt-5">
        <CustomTextLabel title="Apellido Paterno" />
        <CustomTextInput
          name="paternal_name"
          value={formParams.paternal_name}
          placeholder="Pérez"
          secureTextEntry={false}
          onChange={handleChange}
        />

      <View className="mt-5">
        <CustomTextLabel title="Apellido Materno" />
        <CustomTextInput
          name="maternal_name"
          value={formParams.maternal_name}
          placeholder="López"
          secureTextEntry={false}
          onChange={handleChange}
        />
      </View>

      <View className="mt-5">
        <CustomTextLabel title="Sexo" />
        <CustomSelectInput
          name="sex"
          onChange={handleChange}
        />
      </View>

      <View className="mt-5">
        <CustomDatePicker
          name="date_of_birth"
          onChange={handleChange}
        />
      </View>

      <View className="mt-5">
        <CustomTextLabel title="Puesto actual" />
        <CustomTextInput
          name="job_title"
          value={formParams.job_title}
          placeholder="Ingeniero en robótica"
          secureTextEntry={false}
          onChange={handleChange}
        />
      </View>

      <View className="mt-5">
        <CustomTextLabel title="Acerca de mi" />
        <CustomTextArea
          name="summary"
          value={formParams.summary}
          placeholder="Soy introvertido y me encantan las peliculas de accion. Además..."
          secureTextEntry={false}
          onChange={handleChange}
        />
      </View>

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
