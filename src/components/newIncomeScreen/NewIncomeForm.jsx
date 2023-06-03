import { useState } from "react";
import { View, Text } from "react-native";

import CustomTextLabel from "../common/CustomTextLabel";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";
import CustomTextArea from "../common/CustomTextArea";

const initialState = {
  name: '',
  description: '',
  quantity: ''
}

const NewIncomeForm = () => {
  const [incomeParams, setIncomeParams] = useState(initialState);

  const handleOnChange = (name, value) => {
    setIncomeParams(prevState => (
      { ...prevState, [name]: value }
    ));
  }

  const handleOnSubmit = () => {
    console.log(incomeParams)
  }

  return(
    <View className="flex-1 w-full px-10">
      <Text className="text-white font-bold text-2xl text-center mb-5">Añadir nuevo ingreso</Text>
      <View className="flex flex-col my-3">
        <CustomTextLabel title="Titulo:" />
        <CustomTextInput
          name="name"
          value={incomeParams.name}
          placeholder="Celular Samsung"
          secureTextEntry={false}
          onChange={handleOnChange}
        />
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
      </View>

      <View className="flex items-center justify-center my-5">
        <CustomButton
          title="Crear ingreso"
          color="green"
          onPress={handleOnSubmit}
        />
      </View>
    </View>
  )
}

export default NewIncomeForm;
