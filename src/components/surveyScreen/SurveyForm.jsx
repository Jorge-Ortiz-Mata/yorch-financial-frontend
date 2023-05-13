import { useState } from "react";
import { View, Text } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import CustomTextLabel from "../common/CustomTextLabel";
import CustomButton from "../common/CustomButton";
import CustomTextArea from "../common/CustomTextArea";

const intialState = { rating: 0, comments: '' };

const SurveyForm = () => {
  const [formParams, setFormParams] = useState(intialState);
  const optionsAirbnbRating = ['Muy malo', 'Malo', 'Regular', 'Bueno', 'Excelente'];

  const handleChange = (name, value) => {
    setFormParams(prevState => (
      {...prevState, [name]: value}
    ));
  }

  const handleRatingAirBnB = (value) => {
    setFormParams(prevState => (
      {...prevState, rating: value}
    ));
  }

  const handleSubmit = () => {
    console.log(formParams);
  }

  return(
    <View className="items-center justify-center my-10 py-5 px-10">
      <Text className="mt-5 text-white font-bold text-lg">Nivel de satisfacción</Text>
      <AirbnbRating
        count={5}
        reviews={optionsAirbnbRating}
        defaultRating={3}
        size={20}
        onFinishRating={handleRatingAirBnB}
      />

      <View className="my-10">
        <CustomTextLabel title="Comentarios adicionales" />
        <CustomTextArea
          name="comments"
          value={formParams.comments}
          placeholder="Muy buena aplicación. Podría mejorar en..."
          secureTextEntry={false}
          onChange={handleChange}
        />
      </View>

      <View className="items-center">
        <CustomButton
          title="Enviar"
          color="green"
          onPress={handleSubmit}
        />
      </View>
    </View>
  )
}

export default SurveyForm;
