import { useState } from "react";
import { View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { booleanActions } from "../../store/booleanSlice";

import { createIncome } from "../../services/revenueService";

import CustomTextLabel from "../common/CustomTextLabel";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";
import CustomTextArea from "../common/CustomTextArea";
import CustomLoadingLabel from "../common/CustomLoadingLabel";

const initialState = {
  title: '',
  description: '',
  quantity: ''
}

const NewIncomeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [incomeParams, setIncomeParams] = useState(initialState);

  const handleOnChange = (name, value) => {
    setIncomeParams(prevState => (
      { ...prevState, [name]: value }
    ));
  }

  const handleOnSubmit = async () => {
    setIsLoading(true);

    try{
      await createIncome({revenue: incomeParams});
      setErrors({});
      Alert.alert('Ingreso añadido', 'Su nuevo ingreso ha sido añadido correctamente', [{text: 'Accept'}]);
      dispatch(booleanActions.updateState());
      navigate.goBack();
    } catch (error) {
      setErrors(error.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  }

  return(
    <View className="flex-1 w-full px-10">
      <Text className="text-white font-bold text-2xl text-center mb-5">Añadir nuevo ingreso</Text>
      <View className="flex flex-col my-3">
        <CustomTextLabel title="Titulo:" />
        <CustomTextInput
          name="title"
          value={incomeParams.title}
          placeholder="Celular Samsung"
          secureTextEntry={false}
          onChange={handleOnChange}
        />
        { errors?.title && <Text className="text-red-400 mt-2 font-bold">{errors?.title}</Text> }
      </View>

      <View className="flex flex-col my-3">
        <CustomTextLabel title="Description:" />
        <CustomTextArea
          name="description"
          value={incomeParams.description}
          placeholder="Este gasto se realizó el día de ayer"
          secureTextEntry={false}
          onChange={handleOnChange}
        />
        { errors?.description && <Text className="text-red-400 mt-2 font-bold">{errors?.description}</Text> }
      </View>

      <View className="flex flex-col my-3">
        <CustomTextLabel title="Cantidad (MXN):" />
        <CustomTextInput
          name="quantity"
          value={incomeParams.quantity}
          placeholder="34.99"
          secureTextEntry={false}
          onChange={handleOnChange}
        />
        { errors?.quantity && <Text className="text-red-400 mt-2 font-bold">{errors?.quantity}</Text> }
      </View>

      <View className="flex items-center justify-center my-5">
        {
          isLoading
          ? <CustomLoadingLabel />
          : <CustomButton
              title="Crear ingreso"
              color="green"
              onPress={handleOnSubmit}
            />
        }
      </View>
    </View>
  )
}

export default NewIncomeForm;
