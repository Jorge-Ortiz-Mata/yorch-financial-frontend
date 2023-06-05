import { View, Text } from "react-native";

import CustomTextLabel from "./CustomTextLabel";
import CustomTextInput from "./CustomTextInput";
import CustomTextArea from "./CustomTextArea";
import CustomLoadingLabel from "./CustomLoadingLabel";
import CustomButton from "./CustomButton";

const CustomFormItem = ({ formTitle, item, isLoading, onSubmit, onChangeText, errors }) => {

  const handleOnChange = (name, value) => {
    onChangeText(name, value);
  }

  const handleSubmit = async () => {
    onSubmit();
  }

  return(
    <View className="flex-1 w-full px-10">
      <Text className="text-white font-bold text-2xl text-center mb-5">{formTitle}</Text>
      <View className="flex flex-col my-3">
        <CustomTextLabel title="Titulo:" />
        <CustomTextInput
          name="title"
          value={item.title}
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
          value={item.description}
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
          value={item.quantity}
          placeholder="34.99"
          secureTextEntry={false}
          onChange={handleOnChange}
        />
        { errors?.quantity && <Text className="text-red-400 mt-2 font-bold">{errors?.quantity}</Text> }
      </View>

      <View className="flex items-center justify-center mt-10">
        {
          isLoading
          ? <CustomLoadingLabel title="Guardando gasto" />
          : <CustomButton
              title="Crear registro"
              color="green"
              onPress={handleSubmit}
            />
        }
      </View>
    </View>
  )
}

export default CustomFormItem;
