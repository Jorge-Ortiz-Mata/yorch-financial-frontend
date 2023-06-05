import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { useFormSubmit } from '../hooks/useFormSubmit';
import CustomFormItem from '../components/common/CustomFormItem';

const NewExpenseScreen = () => {
  const navigation = useNavigation();
  const { saveExpense } = useFormSubmit();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formParams, setFormParams] = useState({
    title: '',
    description: '',
    quantity: ''
  });

  useEffect(() => {
    navigation.setOptions({
      title: 'Añadir gasto',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: "#000000" },
    });
  }, []);

  const handleOnChangeText = (name, value) => {
    setFormParams(prevState => (
      { ...prevState, [name]: value }
    ));
  }

  const handleOnSubmit = async () => {
    setIsLoading(true);
    const response = await saveExpense("expense", formParams, "Gasto añadido", "Su nuevo gasto ha sido añadido correctamente")
    setIsLoading(false);

    if(response.status === 422){
      setErrors(response?.data?.errors);
    } else {
      navigation.goBack();
    }
  }

  return(
    <View className="flex-1">
      <ScrollView>
        <LinearGradient colors={['#000000', '#212A3E']} className="h-screen items-center py-10">
          <CustomFormItem
            item={formParams}
            formTitle="Añadir nuevo gasto"
            isLoading={isLoading}
            onChangeText={handleOnChangeText}
            onSubmit={handleOnSubmit}
            errors={errors}
          />
          <StatusBar style="light" />
        </LinearGradient>
      </ScrollView>
    </View>
  )
}

export default NewExpenseScreen;
