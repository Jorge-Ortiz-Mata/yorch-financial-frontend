import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native";
import SurveyHeader from "../components/surveyScreen/SurveyHeader";
import SurveyForm from "../components/surveyScreen/SurveyForm";

const SurveyScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Encuesta de satisfacción',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: "#000000" },
    });
  }, []);

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1">
      <ScrollView className="w-full">
        <SurveyHeader />
        <SurveyForm />
      </ScrollView>
    </LinearGradient>
  )
}

export default SurveyScreen;
